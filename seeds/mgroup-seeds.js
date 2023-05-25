const { MuscleGroup } = require('../models');

const musclegroupdata = [
  {
    id: 1,
    muscle_name: "Chest",
    description: "The chest muscle, also known as the pectoralis major, is a large muscle group located in the upper body. Working out the chest muscles can help improve upper body strength and tone the chest area.",
    // exercises_id: 
    // image_id: ,
  },
  {
    id: 2,
    muscle_name: "Back",
    description: "The back muscles are a group of large muscles located in the upper and lower back. Working out the back muscles can help improve posture, upper body strength, and overall back health.",
    // exercises_id:,
    // image_id: ,
  },
  {
    id: 3,
    muscle_name: "Legs",
    description: "When it comes to working out your legs as a beginner, it's important to focus on exercises that target all the major muscle groups in your lower body. This includes exercises that work your quadriceps, hamstrings, glutes, calves, and hip abductors/adductors."
  },
  {
    id: 4,
    muscle_name: "Arms",
    description: "The arm muscles include the biceps, triceps, and forearms. Working out the arm muscles can help improve upper body strength and tone the arm area." ,
    // exercises_id: ,
    // image_id: ,
  },
  {
    id:5,
    muscle_name: "Shoulders",
    description: "The shoulder muscles are a complex group of muscles that include the deltoids, rotator cuff muscles, and trapezius. Working out the shoulder muscles can help improve posture, upper body strength, and stability.",
    // exercises_id: ,
    // image_id: ,
  },
  {
    id:6,
    muscle_name: "Warm Up",
    description: "A proper warm-up increases blood flow to the muscles, which helps to increase their flexibility and range of motion, reducing the risk of injury. It also raises the body's core temperature, which improves the efficiency of the muscles and reduces the likelihood of muscle strain or other injuries during exercise. Additionally, a warm-up session can help to mentally prepare beginners for their workout and improve their overall performance."
    // exercises_id:,
  },
  {
    id:7,
    muscle_name: "Cool Down",
    description: "A cool down is a period of gentle exercise that you do after your workout to help your body gradually transition from a state of high activity to a state of rest. The purpose of a cool down is to help your body return to its normal state slowly and safely, reducing the risk of injury and allowing your muscles to recover more effectively."
    // exercises_id:,
  },
];

const seedMuscleGroup = () =>MuscleGroup.bulkCreate(musclegroupdata);

module.exports = seedMuscleGroup;

// The back muscles are a group of large muscles located in the upper and lower back. Working out the back muscles can help improve posture, upper body strength, and overall back health.

//  The shoulder muscles are a complex group of muscles that include the deltoids, rotator cuff muscles, and trapezius. Working out the shoulder muscles can help improve posture, upper body strength, and stability.

// The arm muscles include the biceps, triceps, and forearms. Working out the arm muscles can help improve upper body strength and tone the arm area.