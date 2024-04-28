
const filterItems = document.querySelectorAll(".filter-item");

filterItems.forEach(item => {
  item.addEventListener("click", function(){
    filterItems.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
    const filterValue = this.getAttribute("data-filter");
    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach(item => {
      if (filterValue === "all" || item.getAttribute("data-category") === filterValue){
        item.style.display = "block";
        item.classList.add("show");
      } else {
        item.style.display = "none";
        item.classList.remove("show");
      }
    });
  });
});