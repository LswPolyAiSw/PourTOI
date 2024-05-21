const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const chatHistory = document.getElementById("chat-history");

// 엔터 키 누를 때 메시지 전송
userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

// 전송 버튼 클릭 시 메시지 전송
sendButton.addEventListener("click", function () {
  sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message !== "") {
    addMessage("user", message);
    userInput.value = "";
    scrollToBottom();
  }
}

function addMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.classList.add("clearfix");
  messageElement.classList.add(
    sender === "user" ? "user-message" : "other-message"
  );
  messageElement.innerHTML = `
            <div class="message-inner">${message}</div>
        `;
  chatHistory.appendChild(messageElement);

  // 새로운 채팅이 추가될 때마다 스크롤을 아래로 이동
  scrollToBottom();
}

function scrollToBottom() {
  chatHistory.scrollTop = chatHistory.scrollHeight;
}
