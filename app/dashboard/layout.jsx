import View from "@/app/dashboard/information/page";
import Homepage from "@/app/dashboard/profile/page";
import Theming from "@/components/providers/Theme";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Theming>
          <div className="mx-auto w-full">
            <div className="gap-2 w-full my-2 flex justify-center flex-col md:flex-row">
              <Homepage />
              <View />
            </div>
          </div>
        </Theming>
      </body>
    </html>
  );
}
