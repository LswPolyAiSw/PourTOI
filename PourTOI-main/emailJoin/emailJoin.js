// NodeList.prototype.map = Array.prototype.map;

// const checkOptionAll = document.querySelector(".checkOptionAll");
// const checkOptions = document.querySelectorAll(".checkOption");
// checkOptionAll.addEventListener("click", () => {
//   checkOptions.forEach((checkOption) => {
//     checkOption.checked = checkOptionAll.checked;
//   });
// });

// checkOptions.forEach((checkOption) => {
  
//   checkOption.addEventListener("click", (e) => {
//     checkOptionAll.checked = checkOptions.map((checkOption) => checkOption.checked).filter((checked) => checked).length === 5;
//   });
// });


function checkSelectAll() {
  // 전체 동의 체크 후 개별 자동 체크
  const agreeCheckBox = document.querySelectorAll('input[name="check"]');
  // 개별 하나씩 동의체크
  const checking = document.querySelectorAll('input[name="check"]:checked');
  // 개별체크 후 전체 동의 체크 자동 체크
  const selectAll = document.querySelector('input[name="checkAll"]');

  if(agreeCheckBox.length-1 === checking.length) {
    selectAll.checked = true;
  } else {
    selectAll.checked = false;
  }
}

function selectAll(selectAll) {
  const agreeCheckBox = document.getElementsByName('check');

  agreeCheckBox.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
  });
}




