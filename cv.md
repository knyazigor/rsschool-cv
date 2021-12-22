# Igor Shaymukhametov
#### Frontend developer

Email                 **<shaym@yandex.ru>**
Tel                   **+7(927)34-52-972**
City                  **Ufa, Russia**

## Education
2021-2022 (excepted) 
: **JS/Front-end** Rolling scopes school

2005-2009 
: **Engineer** Ufa state aviation techincal university, FIR

## Experience
2010-until now
: **Manager** 
- Sentyabr Ltd (ООО "Сентябрь"), metal trading company
A wide range of tasks related to customer service, transaction support, logistics. Including tasks related to IT: launch and maintenance of servers, workstations. Development of landing pages.

2005-2010 
: **System administrator** 
- Rucom Ltd (ООО "Руком"), it-outsource company
- Ufimskiy hleb OJSC (ОАО "Уфимский хлеб"), bread production plant
Deployment and support of servers, networks, workstations. User technical support. Development of documentation, user manuals.

## Skills
- HTML, CSS, JS
- Vue, Vuex, Vue Router
- Git
- Webpack
- Docker

## Code example
Kata: [Pyramid Slide Down](https://www.codewars.com/kata/551f23362ff852e2ab000037)
Solution: 

function longestSlideDown (pyramid) {
  let result = pyramid.pop()
    while (pyramid.length > 0) {
        let tmp = pyramid.pop()
        result = tmp.map((el, i) => el + Math.max(result[i], result[i+1]))
    }    
    return result[0]  
}
