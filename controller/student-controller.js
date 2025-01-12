import Student from "../models/student-model.js"

export const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body)
        await student.save()
        res.status(201).json({
            msg: "This API will create new student in DB",
            student,
        })


    } catch (error) {
        console.log("Error in creating student");
        console.log(error);
        res.status(400).json({
            msg: error.message,
            error,
        });
    }
}

export const readAllStudent = async (req, res) => {
    try {
        const students = await Student.find();
        const number = students.length;
        res.status(200).json({
            number,
            students,
        });
    } catch (error) {
        console.log("OH NO ERROR");
        console.log(error);
        res.status(500).json({
            msg: error.message,
            error,
        });
    }
};


export const readStudent = async (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
  
    try {
      const student = await Student.findById(id);
      res.status(200).json({
        success: true,
        message: "The specific Student fetched from DB",
        student,
      });
    } catch (error) {
      console.log("OH NO ERROR");
      console.log(error);
      res.status(500).json({
        msg: error.message,
        error,
      });
    }
  };

  export const updateStudent = async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    console.log(req.body);
  
    try {
      const student = await Student.findByIdAndUpdate(id, req.body, { new: true });
      // console.log(book);
  
      res.status(200).json({
        message: "The specific Student is Updated in DB",
        student,
      });
    } catch (error) {
      console.log("OH NO ERROR");
      console.log(error);
      res.status(500).json({
        msg: error.message,
        error,
      });
    }
  };

  export const deleteStudnet = async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    // console.log(req.body);
  
    try {
      await Student.findByIdAndDelete(id);
  
      res.status(200).json({
        message: "The specific Student is Deleted from DB",
      });
    } catch (error) {
      console.log("OH NO ERROR");
      console.log(error);
      res.status(500).json({
        msg: error.message,
        error,
      });
    }
  };