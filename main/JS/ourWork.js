const ourWorkButtons = document.querySelectorAll("#work #workButtons button");
const works = document.querySelectorAll("#works .mycontent");
const active = "bg-primary text-white";
const normal =
  "bg-primary/20 dark:bg-primary/30 text-black dark:text-white hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors";
ourWorkButtons.forEach((ele) => {
  ele.addEventListener("click", function () {
    ourWorkButtons.forEach((bnt) => {
      bnt.classList.add(
        ...normal.split(" ").filter((cls) => cls.trim() !== "")
      );
      bnt.classList.remove(
        ...active.split(" ").filter((cls) => cls.trim() !== "")
      );
    });

    this.classList.remove(
      ...normal.split(" ").filter((cls) => cls.trim() !== "")
    );
    this.classList.add(...active.split(" ").filter((cls) => cls.trim() !== ""));

    works.forEach((work) => {
      if (this.id === work.id) work.style.display = "block";
      else if (this.id === "all") work.style.display = "block";
      else work.style.display = "none";
    });
  });
});
