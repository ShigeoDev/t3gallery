import Link from "next/link";

const mockUrls = [
    "https://utfs.io/f/0cdc85e7-3c2e-4626-b574-10d90e362f89-3rq2tp.png",
    "https://utfs.io/f/dd3ff5a4-bb35-4183-8d41-3f54d1474599-ezf5w8.png",
    "https://utfs.io/f/3e5002db-7aa8-44df-920a-1e41da31c5ea-1vdco.png",
];

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
}));

export default function HomePage() {
  return (
    <main className="">
        <div className="flex flex-wrap gap-4">
            {
            [...mockImages, ...mockImages, ...mockImages].map((image) => (
            <div key={image.id} className="w-48">
               <img src={image.url} alt="image" /> 
            </div>
            ))
            }
        </div>
    </main>
  );
}


