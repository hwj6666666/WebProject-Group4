const ObjectProfile = ({object}) => {
    if (!object) return <div>loading</div>

    return (
        <div className="flex flex-col items-center w-1/4 h-fit bg-header text-base rounded-lg drop-shadow-lg px-12 py-8 mt-12 ml-6">
            <h2 className="text-3xl mb-5 font-thin">{object.title}</h2>
            <img src={object.picture} alt="restaurantPhoto" />
            <p className="mt-6">{object.description}</p>
        </div>
    );
}

export default ObjectProfile;