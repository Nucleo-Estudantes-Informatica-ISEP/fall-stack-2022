interface ActivityProps {
	logo: string;
	title: string;
	day: number;
}

const Activity: FunctionComponent<ActivityProps> = ({ logo, title, day, children }) => {
	return(
		<div className="w-full flex flex-col items-center justify-center text-center">
            <div id="w-full">
                <img
                    id="content-activity-image"
                    src={logo}
                    alt={title + " image"}
                    className="w-32"
                />
            </div>
            <div className="content-activity">
                <h5 className="font-good__times my-5 text-2xl text-gray-600">
                    {title}
                    <br />
                    (Dia {day})
                </h5>
                <div className="leading-7 text-lg">
                    {children}
                </div>
            </div>
        </div>
	);
}

export default Activity;