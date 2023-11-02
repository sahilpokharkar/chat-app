import Avatar from "./Avatar";

export default function Contact({ id, username, onClick, selected, online }) {
    return (
		<div
            key={id}
			onClick={() => onClick(id)}
			className={
				"border-b border-gray-100 flex items-center gap-2 cursor-pointer " +
				(selected ? "bg-blue-50" : "")
			}
		>
			{/* key is added feature */}
			{selected && (
				<div className="w-1 bg-blue-500 h-12 rounded-r-md"></div>
			)}

			<div className="py-2 pl-4 flex gap-2 items-center">
				<Avatar
					username={username}
					userId={id}
					online={online}
				/>
				<span className="text-gray-800">{username}</span>
			</div>
		</div>
	);
}