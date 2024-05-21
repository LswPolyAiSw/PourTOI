// const button = document.quearySelector("button[type=submit]");
// const email = document.querySelector("input[name='email']");
// const pw = document.querySelector("input[name='password']");
// const emailCheck = document.getElementById("emailCheck");
// const pwCheck = document.getElementById("pwCheck");

// globalThis.flag = new Array(false, false);

// // 이메일 경고
//   email.addEventListener("blur", (e) => {
//     const target = e.target;
  
//     if(!target.value) {
//       globalThis.flag[0] = false;
//       emailCheck.innerText = "필수항목 입니다.";
//       emailCheck.style.color = "red";
//       hiddenWrong.style.display = "block";
//       emailCheck.focus();
//       return;
  
//     } else {
//       globalThis.flag[0] = false;
//       emailCheck.innerText = "올바른 이메일 형식이 아닙니다.";
//       emailCheck.style.color = "red";
//       hiddenWrong.style.display = "block";
//       emailCheck.focus();
//       return;
//     }
  
//       globalThis.flag[0] = true;
//       submit();
    
//   });
  
//   // 비밀번호 경고
//   password.addEventListener("blur", (e) => {
//     const target = e.target;
  
//     if(!target.value) {
//       globalThis.flag[1] = false;
//       pwCheck.innerText = "필수항목 입니다.";
//       pwCheck.style.color = "red";
//       hiddenWrong.style.display = "block";
//       target.focus();
//       return;
  
//     } else {
//       pwCheck.innerText = "8자 이상, 20자 이하로 입력해주세요.";
//       pwCheck.style.color = "red";
//       hiddenWrong.style.display = "block";
//       globalThis.flag[1] = true;
//       target.focus();
//     }
    
//   });



