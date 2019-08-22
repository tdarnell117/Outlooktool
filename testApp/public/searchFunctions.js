// Searchbar function that displays emails with the header you type in the form input

    const allEmails = document.getElementsByClassName('list-group-item');
    let searchArr = [];
    let ExcludedSearchArr = [];
    var filterExArr = [];
    
    

    var newArr = searchArr.concat(allEmails);
    console.log(newArr);


    const searchButton = document.getElementById('searchBtn').addEventListener('click', function(event) {
        const term = document.getElementById('search').value.toLowerCase();
        filterSearch(term);
    })


    function filterSearch(searchTerm) {
        for(var i = 0; i < allEmails.length; i++) {
            const emails = allEmails[i].innerText;
            if(emails.toLowerCase().indexOf(searchTerm) != -1) {
                allEmails[i].style.display = 'block';
            } else {
                allEmails[i].style.display = 'none';
            }
        };
    };

    const exSearchBar = document.getElementById('addBtn').addEventListener('click', function(event) {
        add_element_to_array();    
        excludeFilterSearch();   
        display_array();
        });

    

    function add_element_to_array() {
       var Val =  document.getElementById("excludedSearch").value.toLowerCase();
        filterExArr.push(Val);
        
    }

    function excludeFilterSearch() {    
        for(i = 0; i < allEmails.length; i++) {
            const exEmails = allEmails[i].innerText;
            for(x = 0; x < filterExArr.length; x++) {
                if(exEmails.toLowerCase().indexOf(filterExArr[x]) > -1) {
                    allEmails[i].style.display = 'none';
                } else {
                    allEmails[i].style.display = 'block';
                } 
            }
        }
    };
 

    function display_array() {
       var e = "<hr/>";   

       for (var y = 0; y < filterExArr.length; y++)
       {
         e += "Excluded Term: " + " " + filterExArr[y] + "<br/>";
       }
       document.getElementById("Result").innerHTML = e;
       document.getElementById("excludedSearch").value = "";
    }

    const clearAll = document.getElementById('clear').addEventListener('click', function(event) {
        document.getElementById('excludedSearch').value = '';
        document.getElementById('search').value = '';
        for(i = 0; i < allEmails.length; i++) {
            allEmails[i].style.display = 'block';
        }
        const term = document.getElementById('search').value;
        filterSearch(term);
        document.getElementById("Result").innerHTML = '';
        filterExArr = [];
        y = 0;
    });



  




    
    
    
       
       
   