export function Tagcard() {
    return (
        <div className="flex gap-2 items-center justify-center">
              <img src={"/tag.svg"} className="h-5 w-5" />
              <p className="font-medium">from $100</p>
            </div>
    );
}
