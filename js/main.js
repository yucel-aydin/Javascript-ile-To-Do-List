let btnAdd = document.getElementById("liveToastBtn");
let ulElement = document.getElementById("list");
let liList = Array.from(document.querySelectorAll("#list>li"));
let taskInput = document.getElementById("task");

let toastTitle = document.getElementsByClassName("toast-title")[0];
let toastDescription = document.getElementsByClassName("toast-body")[0];
let toast = document.getElementById("liveToast");

//Var olan liste elemanlarına Silme iconu ve onclik eventine ilgili function yazılır.
for (let i = 0; i < liList.length; i++) {
  let removeBtn = document.createElement("span");
  removeBtn.textContent = "X";
  removeBtn.classList.add("remove");
  removeBtn.onclick = removeElement;
  liList[i].append(removeBtn);

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "chck";
  checkbox.value = "value";
  checkbox.className = "checkElement";
  checkbox.onclick = check;
  liList[i].append(checkbox);
}

// Listenen eleman seçilince üstü çizili ve checked olması
function check() {
  if (this.checked) {
    this.parentElement.classList.toggle("checked");
    toastTitle.innerHTML = "Başarılı";
    toastDescription.innerHTML =
      "'" +
      this.parentElement.innerText.replace("\nX", "") +
      "' " +
      "Elamanı Seçildi.";
    toast.classList.remove("bg-danger");
    toast.classList.add("bg-success");
    $(".toast").toast("show");
  }else{
    this.parentElement.classList.toggle("checked");
  }
}
// Silme iconuna basılınca ilgili li elementini kaldırır.
function removeElement() {
  this.parentElement.remove();
  toastTitle.innerHTML = "Başarılı";
  toastDescription.innerHTML = "Elaman Silindi.";
  toast.classList.remove("bg-danger");
  toast.classList.add("bg-success");
  $(".toast").toast("show");
}

// Ekle butonun basılınca bu function çalışır listeye kontrolleri yapıp değeri ekler.
function newElement() {
  if (taskInput.value == "") {
    toastTitle.innerHTML = "Boş Eleman Ekleyemezsiniz!!!";
    toastDescription.innerHTML = "Lütfen Bir Değer Giriniz.";
    toast.classList.remove("bg-success");
    toast.classList.add("bg-danger");
    $(".toast").toast("show");
  } else {
    let liNew = document.createElement("li");
    liNew.innerHTML = taskInput.value;
    taskInput.value = "";

    let removeBtn = document.createElement("span");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove");
    removeBtn.onclick = removeElement;
    liNew.append(removeBtn);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "chck";
    checkbox.value = "value";
    checkbox.className = "checkElement";
    checkbox.onclick = check;
    liNew.append(checkbox);

    ulElement.append(liNew);

    toastTitle.innerHTML = "Başarılı";
    toastDescription.innerHTML = "Girilen Değer Listeye Eklendi.";
    toast.classList.add("bg-success");
    toast.classList.remove("bg-danger");
    $(".toast").toast("show");
  }
}
