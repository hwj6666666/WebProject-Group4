import restaurantPhoto from "@/assets/restaurant.jpg";

const ObjectProfile = ({object}) => {
    return (
        <div className="flex flex-col items-center w-1/4 h-fit bg-white rounded-lg drop-shadow-lg px-12 py-8 mt-12 ml-6">
            <h2 className="text-3xl mb-5 font-thin">{object.name}</h2>
            <img src={restaurantPhoto} alt="restaurantPhoto" />
            <p className="mt-6">{object.description}</p>
        </div>
    );
}

export default ObjectProfile;