import db from "../Models/index.js";
const Course = db.course;

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    if (!courses) res.status(404).send(" no courses found");
    res.send(courses);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const addCourse = async (req, res) => {
  try {
    console.log(req.userId);
    console.log(req.body);
    const course = new Course({
      title: req.body.title,
      imageURL: req.body.imageURL,
        label: req.body.label,
        progress: req.body.progress,
        numUsers: req.body.numUsers,
        rating: req.body.rating,
        userName: req.body.userName,
    });
    await course.save(course);
    res.send({
      message: "Course was registered successfully!",
      ideaId: course._id,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) res.status(404).send("course not found");
    res.send(course);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) res.status(404).send("course not found");
    course.Title = req.body.Title;
    course.Domaine = req.body.Domaine;
    course.Keywords = req.body.Keywords;
    course.TeamSize = req.body.TeamSize;
    course.TeamExpertise = req.body.TeamExpertise;
    course.Budget = req.body.Budget;
    course.RevenueMensuel = req.body.RevenueMensuel;
    course.CoutMensuel = req.body.CoutMensuel;
    course.NbrClientMensuel = req.body.NbrClientMensuel;
    course.PointForts = req.body.PointForts;
    course.PointsFaibles = req.body.PointsFaibles;
    await course.save(course);
    res.send({ message: "Course was updated successfully!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) res.status(404).send("course not found");
    await Course.deleteOne(course);
    res.send({ message: "Course was deleted successfully!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
