
export default function CrystalHome({ crystals }) {
    // console.log(crystals);

    return (
        <div>
            <h1>Welcome to New Beginnings, your one stop Crystal Shop</h1>
            <div>
                {crystals && crystals.map((crystal, i) => {
                    return (
                        <div key={i}>
                            <div>
                                <img src={crystal.image} alt="Crystals"></img>
                                    <div>
                                        <div>{crystal.name}</div>
                                        <p>{crystal.description}
                                        </p>
                                    </div></div>

                            
                        </div>
                    )

                })}
            </div>

        </div>
    )
}

