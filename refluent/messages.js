const messages = [
  "내가 아무 결정을 하지 않는 동안,\n누군가는 나의 중립성 안에서 하루를 견디고 있을 수 있다.",
  "이 글이 당신에게 아무 의미도 없었다면,\n당신은 이미 조용히 깨어 있는 사람일 수 있습니다.",
  "감동하지 않아도 괜찮습니다.\n그러나 설명되지 않는 여운이 있다면,\n그건 사유가 시작되었다는 신호일 수 있습니다."
];

const chosen = messages[Math.floor(Math.random() * messages.length)];
document.getElementById("message").textContent = chosen;
