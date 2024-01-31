import { Product } from './Product';
import { Button } from './Button/Button';
import { Reader } from './Reader/Reader';
import articles from '../../articles.json';
import './App.css';

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product />

      <Button />
      <Button />

      <Reader items={articles} />
    </div>
  );
}

// ----------------------------------------------------------
// Підняття стану

// import { useState } from 'react';

// // ClickCounter отримує функцію onUpdate (ім'я пропа),
// // яка викликається під час події onClick
// const ClickCounter = ({ value, onUpdate }) => {
//   return <button onClick={onUpdate}>Current: {value}</button>;
// };

// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   // Функція, яку будемо передавати в ClickCounter
//   // для виклику під час кліку
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <>
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// }

// ------------------------------------------------------
// Оновлення об'єктів

// import { useState } from 'react';

// export default function App() {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// }

// -----------------------------------------------------------
// Модуль2 Заняття 2

// import { useState, useEffect } from 'react';

// const getInitialClicks = () => {
//   const savedClicks = window.localStorage.getItem('number-of-clicks');
//   // console.log(typeof JSON.parse(savedClicks));

//   if (savedClicks !== null) {
//     return JSON.parse(savedClicks);
//   }
//   return 0;
// };

// export default function App() {
//   const [clicks, setClicks] = useState(getInitialClicks);

//   const [date, setDate] = useState(Date.now());

//   useEffect(() => {
//     console.log('MOUNT EFFECT');
//   }, []);

//   useEffect(() => {
//     console.log('code inside useEffect', clicks);
//     window.localStorage.setItem('number-of-clicks', clicks);
//   }, [clicks]);

//   useEffect(() => {
//     console.log('Log, when date state changes ', date);
//   }, [date]);

//   // useEffect(() => {
//   //   console.log('Effect on mount');

//   //   const id = setInterval(() => {
//   //     console.log(Date.now());
//   //   }, 20000);

//   //   return () => {
//   //     console.log('effecr cleanup');
//   //     clearInterval(id);
//   //   };
//   // }, []);

//   return (
//     <>
//       <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
//       <button onClick={() => setDate(Date.now())}>Date: {date}</button>
//     </>
//   );
// }
