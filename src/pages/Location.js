import introLogo from "../assets/logo/intro@2x.png";
import React, { useState, useEffect } from "react";
import MapPage from "./Map"

function Intro() {
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리
  
    useEffect(() => {
      // 3초 후 로딩 상태 해제
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
  
      return () => clearTimeout(timer); // 타이머 정리
    }, []);
  
    if (isLoading) {
      // 로딩 화면
      return (
        <div style={styles.intro}>
          <img src={introLogo} alt="App Logo" style={styles.logo} />
        </div>
      );
    }
  
    // 메인 페이지 내용
    return (
      <MapPage/>
    );
  }
  
  const styles = {
    intro: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "var(--background-color)", // 로딩 화면 배경색
    },
    logo: {
      width: "8.438em",
      height: "12.25em",
      display: "flex",
      justifyContent : "center",
      margin: "26vh 0 47vh 0"
    },
  };
  
  export default Intro;


// function Intro() {
//   const [loading, setLoading] = useState(true);

//     useEffect(() => {
//       const timer = setTimeout(() => setLoading(false), 3000);
//       return () => clearTimeout(timer);
//     }, []);

//     if (loading) {
//       return (
//         <div className="intro-logo">
//           <img src={introLogo} style={"sheight:12.25em, width:8.438em"}></img>
//         </div>
//       );
//     }

//   return (
//     MapPage
//     // <div className = "App">
//     //   <h1>Hello, you re on main page now</h1>
//     // </div>
//   )
// } 

// export default Intro;