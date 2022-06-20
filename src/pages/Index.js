import BigButton from "../components/big-button/BigButton";

export default function Index() {
    return (
        <div className="h-screen w-full flex flex-row flex-wrap justify-center items-center">
          <div className="w-1/3">
            <BigButton title="Login" link="#"/>
          </div>
        </div>
    )
}