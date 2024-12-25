import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mb-6">
      <Image
        src="/konoha.png"
        alt="Logo da Marca"
        width={100}
        height={100}
        className="rounded-full"
      />
    </div>
  );
};

export default Logo;
