export function getDiscussion({ method, name }) {
  // HINT: 가장 마지막 테스트를 통과하기 위해, fetch를 이용합니다. 아래 구현은 완전히 삭제되어도 상관없습니다.
  // TODO: 아래 구현을 REST API 호출로 대체하세요.
  let DiscusstionUrl = `http://localhost:3001/discussions`;
  switch (method) {
    case "GET":
      if (name === "") {
        DiscusstionUrl = `http://localhost:3001/discussions`;
        return fetch(DiscusstionUrl).then((res) => res.json());
      }
      DiscusstionUrl = `http://localhost:3001/discussions/name/${name}`;
      return fetch(DiscusstionUrl).then((res) => res.json());
    default:
      return fetch(DiscusstionUrl).then((res) => res.json());
  }
}
