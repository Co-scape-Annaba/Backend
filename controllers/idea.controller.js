import db from "../Models/index.js";
const Idea = db.idea;

export const getIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find({ userId: req.userId });
    if (!ideas) res.status(404).send(" no ideas found");
    res.send(ideas);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const addIdea = async (req, res) => {
  try {
    console.log(req.userId);
    console.log(req.body);
    const idea = new Idea({
      userId: req.userId,
      Title: req.body.Title,
      Domaine: req.body.Domaine,
      Keywords: req.body.Keywords,
      TeamSize: req.body.TeamSize,
      TeamExpertise: req.body.TeamExpertise,
      Budget: req.body.Budget,
      RevenueMensuel: req.body.RevenueMensuel,
      RevenueMensuel: req.body.RevenueMensuel,
      NbrClientMensuel: req.body.NbrClientMensuel,
      PointForts: req.body.PointForts,
      PointsFaibles: req.body.PointsFaibles,
    });

    // here i contact the flask server for the AI to do his magic and return the score of the idea and evaluation of the budget
    // send a post request to the flask server containing a json object with the idea data

    const response = await fetch("http://localhost:5001/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Title: req.body.Title,
        Domaine: req.body.Domaine,
        Keywords: req.body.Keywords,
        TeamSize: req.body.TeamSize,
        TeamExpertise: req.body.TeamExpertise,
        Budget: req.body.Budget,
        RevenueMensuel: req.body.RevenueMensuel,
        RevenueMensuel: req.body.RevenueMensuel,
        NbrClientMensuel: req.body.NbrClientMensuel,
        PointForts: req.body.PointForts,
        PointsFaibles: req.body.PointsFaibles,
      }),
    });

    const data = await response.json();
    console.log(data);
    idea.score = data.score;
    idea.budgetEvaluation = data.budgetEvaluation;

    await idea.save(idea);
    res.send({
      message: "Idea was registered successfully!",
      ideaId: idea._id,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const getIdeaById = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) res.status(404).send("idea not found");
    res.send(idea);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const updateIdea = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) res.status(404).send("idea not found");
    idea.Title = req.body.Title;
    idea.Domaine = req.body.Domaine;
    idea.Keywords = req.body.Keywords;
    idea.TeamSize = req.body.TeamSize;
    idea.TeamExpertise = req.body.TeamExpertise;
    idea.Budget = req.body.Budget;
    idea.RevenueMensuel = req.body.RevenueMensuel;
    idea.CoutMensuel = req.body.CoutMensuel;
    idea.NbrClientMensuel = req.body.NbrClientMensuel;
    idea.PointForts = req.body.PointForts;
    idea.PointsFaibles = req.body.PointsFaibles;
    await idea.save(idea);
    res.send({ message: "Idea was updated successfully!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deleteIdea = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) res.status(404).send("idea not found");
    await Idea.deleteOne(idea);
    res.send({ message: "Idea was deleted successfully!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
