function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

function ProfileCard(props) {
    return (
        <div className="profile-card">
            <img src={props.Url} alt="profile"/>
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
        </div>
    );
}
// 디폴트 값 설정함. React 18 부터 사용 안함.
Welcome.defaultProps = {
    name : '부모로부터 이름을 못 받은 상태'
};
export { ProfileCard ,Welcome };