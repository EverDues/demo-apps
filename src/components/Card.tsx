export const TariffCard = ({ blur, children, plan }: any) => {
  const { title, price, duration, limit } = plan
  return (
    <div className="w-60 rounded overflow-hidden shadow-lg flex flex-col justify-start items-center relative pt-6">
      <img
        className="w-16 h-16 object-cover"
        src="https://cdn-icons-png.flaticon.com/512/679/679821.png"
        alt="Card image"
      />
      <div className="flex flex-col px-6 py-4 space-y-6 w-full h-full">
        <div className="font-bold text-xl mb-2 text-center">{plan.title}</div>
        <div>
          <p className="text-center text-gray-700 text-sm">Price</p>
          <p className="text-center text-blue-600/75 font-medium font-bold text-base"> {price} </p>
        </div>
        <div>
          <p className="text-center text-gray-700 text-sm">Duration</p>
          <p className="text-center text-blue-600/75 font-medium font-bold text-base"> {duration}</p>
        </div>
        <div>
          <p className="text-center text-gray-700 text-sm">Avaible Articles</p>
          <p className="text-center text-blue-600/75 font-medium font-bold text-base"> {limit}</p>
        </div>
        {children}
      </div>
    </div>
  )
}

export const Card = ({ index, blur }: any) => {
  return (
    <div className="relative p-4">
      {blur && (
        <div className="absolute uppercase font-medium backdrop-blur w-full h-full flex items-center justify-center z-10 top-0 left-0"></div>
      )}
      <div className="w-full rounded overflow-hidden shadow-lg  relative">
        <img className="w-full h-48 object-cover" src="https://source.unsplash.com/random/400x301" alt="Card image" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium nunc euismod ligula lobortis, ut
            mattis justo egestas. Pellentesque ac tortor nec metus tincidunt tristique.
          </p>
        </div>
      </div>
    </div>
  )
}
