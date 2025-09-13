//! jsx ---> but browser does not know this. to run this on browser we need transpiler
const myElement = (
    <div>
        <p>
            Hello
        </p>
    </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(myElement);
