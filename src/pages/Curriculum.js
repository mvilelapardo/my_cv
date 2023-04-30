import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Curriculum = () => {
  const [courses, setCourses] = useState([
    // Add your course data here
    {
        title: 'Course Title',
        description: 'Course Description'
      }      
  ]);

  return (
    <div>
      <h1>Curriculum</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course.title}</li>
        ))}
      </ul>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Curriculum;
