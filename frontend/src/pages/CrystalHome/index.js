import { Link } from "react-router-dom"


export default function CrystalHome({ crystals, getCrystalbyID }) {
    // console.log(crystals);

    return (
        <div>
            {/* <h1>Welcome to New Beginnings, your one stop Crystal Shop</h1> */}
            <div>
                {crystals && crystals.map((crystal, i) => {
                    return (
                        <div key={i}>
                            <div>
                                <Link onClick={() => getCrystalbyID(crystal._id)} to={`/crystalhome/${crystal._id}`}>
                                    <img src={crystal.image} alt="Crystals" width="350px"></img>
                                </Link>
                                <div>
                                    <div>{crystal.name}</div>
                                    {/* <p>{crystal.description}</p> */}
                                </div>
                            </div>
                            <hr></hr>
                            <br></br>

                        </div>
                    )

                })}
            </div>

        </div>
    )
}

