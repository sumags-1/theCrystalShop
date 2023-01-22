import { Link } from "react-router-dom"
import './style.css'


export default function CrystalHome({ crystals, getCrystalbyID }) {
    // console.log(crystals);

    return (
        <div>
            {/* <h1>Welcome to New Beginnings, your one stop Crystal Shop</h1> */}
            <div  class="md:flex-auto home_pg flex-wrap">
                {crystals && crystals.map((crystal, i) => {
                    return (
                        <div key={i} class="mb-4 w-1/3 h-2/3">
                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                <Link onClick={() => getCrystalbyID(crystal._id)} to={`/crystalhome/${crystal._id}`}>
                                    <img src={crystal.image} alt="Crystals" width="90%"></img>
                                </Link>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">{crystal.name}</div>
                                    <p class="text-gray-700 text-base">
                                        Price: {crystal.price}
                                    </p>
                                </div>
                                <div class="px-6 pt-4 pb-2">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{crystal.chakra}</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{crystal.zodiac}</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{crystal.element}</span>
                                </div>
                            </div>


                        </div>
                    )

                })}
            </div>

        </div>
    )
}

