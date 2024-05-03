const phones = document.querySelector(".phones");
const input = document.querySelector("#searchField");
const btn1 = document.querySelector(".searh");

btn1.addEventListener("click", async () => {
    const val = input.value;
    const obj = await apifet("https://openapi.programming-hero.com/api/phones?search=" + val);
    makePhones(obj.data);
})

async function apifet(url) {
    const rep = await fetch(url);
    const data = await rep.json();
    return data;

}
function makePhones(arr) {
    phones.innerText = "";
    arr.forEach(ele => {
        const parent = document.createElement("div");
        const img = document.createElement("img");
        img.src = ele.image;
        const para = document.createElement("p");
        para.innerText = ele.phone_name;
        // ele.slug
        const para1 = document.createElement("p");
        para1.innerText = "There are many variations of passages of available, but the majority have suffered";
        const btn = document.createElement("button");
        btn.innerText = "SHOW DETAILS"
        btn.addEventListener("click", async () => {
            document.querySelector(".modal-content").innerText = "";
            const parentt = document.createElement("div");
            const imgg = document.createElement("img");
            imgg.src = ele.image;
            const paraa = document.createElement("p");
            paraa.innerText = ele.phone_name;

            const data = await apifet("https://openapi.programming-hero.com/api/phone/" + ele.slug);
            const paraa2 = document.createElement("p");
            paraa2.innerText = data.data.mainFeatures.storage;
            const paraa3 = document.createElement("p");
            paraa3.innerText = data.data.mainFeatures.displaySize;
            const paraa4 = document.createElement("p");
            paraa4.innerText = data.data.mainFeatures.chipSet;
            const paraa5 = document.createElement("p");
            paraa5.innerText = data.data.mainFeatures.memory;
            const paraa6 = document.createElement("p");
            paraa6.innerText = data.data.mainFeatures.sensors.toString();

            const paraa1 = document.createElement("p");
            paraa1.innerText = ele.brand;
            const btnn = document.createElement("button");
            btnn.innerText = "CLOSE"
            btnn.classList.add("btn")
            btnn.addEventListener("click", () => {
                document.querySelector(".pop").style.display = "none"
            })
            parentt.append(imgg, paraa, paraa1, paraa2, paraa3, paraa4, paraa5, paraa6, btnn);
            document.querySelector(".modal-content").append(parentt);
            document.querySelector(".pop").style.display = "block"
            // phones.append(parent);
            parentt.classList.add("boxx");
        })

        btn.classList.add("btn")
        parent.append(img, para, para1, btn);
        phones.append(parent);
        parent.classList.add("box");
    });
}
window.addEventListener("load", async () => {
    const obj = await apifet("https://openapi.programming-hero.com/api/phones?search=iphone");
    makePhones(obj.data.slice(0, 5));
});
