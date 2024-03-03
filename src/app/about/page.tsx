import React from "react";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <div className="container mx-auto mt-[130px] mb-16 p-8 shadow-lg rounded-lg flex items-center justify-around ">
      <div className="flex-shrink-0 mr-8">
        <Image
          src="/dp.jpg" // Update the path with the correct one
          alt="User Image"
          width={200} // Set the appropriate width
          height={200} // Set the appropriate height
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex-grow max-w-2xl text-left">
        <h2 className="text-3xl font-bold mb-4 text-blue-500">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          At our music school, we are passionate about providing quality music
          education to individuals of all ages and skill levels. Our team of
          experienced instructors is dedicated to creating a nurturing
          environment where students can explore and express their musical
          talents.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          We believe in the power of music to inspire, uplift, and connect
          people. Whether you are just starting your musical journey or looking
          to refine your skills, our comprehensive programs and personalized
          approach ensure a rewarding and enjoyable learning experience.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Join us at the Music School, where we harmonize education and passion
          to foster a community of musicians who share the joy of creating and
          appreciating music.
        </p>
        <div className="mt-8 space-x-4">
          <Link
            href={"/courses"}
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Checkout All Courses
          </Link>
          <Link
            href="#"
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
