import './One.css'

export default function One(){
    return <>
    <div className="number1" id="num1">
        <div className="number-one-img-container">
            <img  src="./Assets/one.svg" alt="" id="num1img" />
        </div>
        <div className="num1textdiv" id="num1contentdiv">
            <p className="num1text" id="num1content">We act as a companion to each child, from kindergarten to college, and
                help them join the <span id="spantxt">top 1% club</span> of the most skilled and successful people in their chosen field.
            </p>
        </div>
    </div>
    </>
}