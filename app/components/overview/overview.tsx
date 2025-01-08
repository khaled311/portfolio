import Image from "next/image";

const Overview = () => {
  return (
    <section className="container mx-auto">
      <div className="flex gap-[90px]">
        <div>
          <Image src="/" width={600} height={400} alt="me" />
        </div>
        <div>2</div>
      </div>
    </section>
  );
};

export default Overview;
