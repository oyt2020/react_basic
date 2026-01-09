import FuncComponent from "./COM/FuncComponent";
import {Welcome,ProfileCard} from "./COM/FuncComponent";



function Post(){
    return (
        <section>
            <Welcome name="김철수"/>
            개발자 프로필
            <ProfileCard
            Url = '/front.jpg'
            name = "Jack"
            bio = "Fronted Developer"
            />
            <ProfileCard
                Url = "/back.jpg"
                name = "Jane"
                bio = "Back Developer"
                />
        </section>
    )
}


export default Post;