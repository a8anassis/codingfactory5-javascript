const titleDOM = document.querySelector('#title')
const auebText = document.querySelector('.aueb-text')
const mainDOM = document.querySelector('.main')
let image = 'https://codingfactory.aueb.gr/sites/all/themes/cf_theme/logo.png'
let altImg = 'Coding Factory'

titleDOM.textContent = 'Coding Factory'
auebText.innerHTML = `Το Coding Factory είναι ένα εκπαιδευτικό πρόγραμμα στην Ανάπτυξη 
                      Λογισμικού του Κέντρου Δια Βίου Μάθησης του Οικονομικού Πανεπιστημίου Αθηνών
                      (ΟΠΑ) και στη συνέχεια διασύνδεσης των αποφοίτων με συνεργαζόμενες 
                      επιχειρήσεις σε όλη την Ελλάδα. Η συνολική διάρκεια του προγράμματος είναι έξι (6) μήνες. Η έναρξη μαθημάτων της επόμενης σειράς είναι τον Μάρτιο 2024. 
                      Τα μαθήματα διεξάγονται καθημερινά Δευτέρα - Παρασκευή 18.00 - 21.00.`
mainDOM.innerHTML = `<article class="course">
                        <div class="cf-container">
                            <img src="${image}" class="cf-img" alt="${altImg}" />
                        </div>
                        <footer>
                            <p class="course-name"> &copy; AUEB - Coding Factory</p>
                        </footer>
                     </article>`