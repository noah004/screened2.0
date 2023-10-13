import Image, { StaticImageData } from "next/image";

interface AboutStaffProps {
  name: string;
  image: StaticImageData;
  about: string;
  role: string;
}

export default function AboutStaff({
  name,
  image,
  about,
  role,
}: AboutStaffProps) {
  return (
    <div className="staff-container">
      <div className="box">
        <Image
          className="profile-image"
          src={image}
          alt={name}
          style={{ maxWidth: "80%", height: "auto" }}
        />
        <div>
          <h3>
            {name}, {role}
          </h3>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
}
