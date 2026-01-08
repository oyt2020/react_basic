const name = '김철수';
const hello = <h1>안녕하세요 {name}!</h1>

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName : '신',
    lastName : '짱구'
};

//const element = <h1>Hello, {formatName(user)}!</h1>

const isLogIn = true;
const element = (
    // 조건부 연산자
    <div>
        {isLogIn ? <h1>Welcome back! </h1> : <h1>Please sign in.</h1>}
    </div>
)
const label = <label htmlFor="inputId">Enter your name:</label>
    //정의한 엘리먼트 내보내기

const imageUrl = '/logo192.png';
const element2 = <img src = {imageUrl} alt = "Something'" />;

function Greeting(props){
    const isLogIn2 =props.isLogin;
    return (
        <div>
            {isLogIn2 ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
        </div>
    );
}

const element3 = (
    <div>
        <header>
            <h1>Welcome</h1>
        </header>
        <main>
            <p>Here are main contents</p>
        </main>
        <footer>
            <p>@ 2024 Education</p>
        </footer>
    </div>
)

export { element, label ,element2,Greeting,element3};
