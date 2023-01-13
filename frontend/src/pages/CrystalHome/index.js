
export default function CrystalHome({ crystals }) {
    console.log(crystals);

    return (
        <div>
            <h1>Welcome to New Beginnings, your one stop Crystal Shop</h1>
            <div>
                {crystals && crystals.map((crystal, i) => {
                    return (
                        <div key={i}>
                            {/* <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                <img class="w-full" src="/assets/black_tourmaline.jpeg" alt="Crystals"></img>
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2">{crystal.name}</div>
                                        <p class="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div></div> */}

                            {crystal.name}
                        </div>
                    )

                })}
            </div>

        </div>
    )
}

