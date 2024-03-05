const InfoBox = ({
  heading,
  backgroundColor,
  textColor = "text-gray-800",
  buttonInfo,
  children,
}) => {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`mt-2 mb-4`}>{children}</p>
      <a
        href={buttonInfo.link}
        className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:opacity-80`}
      >
        {buttonInfo.text}
      </a>
    </div>
    // </div>
  );
};

export default InfoBox;
