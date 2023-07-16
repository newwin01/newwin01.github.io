var store = [{
        "title": "[Jekyll] 블로그 포스팅하는 방법",
        "excerpt":"테스트를 하고 있고 잘 된다!  ","categories": ["Blog"],
        "tags": ["Blog"],
        "url": "/recent/my-first-post/",
        "teaser": null
      },{
        "title": "Window Error",
        "excerpt":"Windows Error There is an error that dragging the mouse makes a dragged portion of the display black on the window OS. If you executes following scripts on the command prompt, you can solve the problem. echo off taskkill /f /im explorer.exe attrib %userprofile%\\appdata\\local\\iconcache.db -s -r -h del /q %userprofile%\\appdata\\local\\iconcache.db...","categories": ["Blog"],
        "tags": ["Blog"],
        "url": "/recent/window-error/",
        "teaser": null
      },{
        "title": "HGU Sleep Over Macro",
        "excerpt":"Handong Global University Sleep Over Macro 대학교 외박 신청 사이트는 굉장히 번거로운 부분이 많았다. 이를 해소하고자 랩실 친구와 매크로를 만들었다. https://github.com/newwin01/Sleep-Over-Macro This is HGU Sleep over macro version 1.0.0 You can sign up for a sleepover using this program. You need to enter the “hisnet” id and password. Then, type...","categories": ["Blog"],
        "tags": ["Blog"],
        "url": "/recent/sleepovermacro/",
        "teaser": null
      },{
        "title": "3rd week in handong",
        "excerpt":"I am at the end of 3rd week in Handong. The 3rd and 1st semesters at Handong are called “사망년” because it is busy as “hell”. And I am passing the 3rd week. This semester, there were lots of changes. I joined ISEL and met co-workers who share informations and...","categories": ["Blog"],
        "tags": ["Blog"],
        "url": "/recent/3rd_week/",
        "teaser": null
      },{
        "title": "Vs code server error",
        "excerpt":"Vs code로만 서버 접속이 안되는 경우   VS code 서버 접속이 다른 경로로는 가능하지만 vs code로 안되는 경우가 존재한다.   서버 내에 vs code server파일의 문제일 가능성이 높다. 해결하는 방법은 어렵지 않다.     rm -rf .vscode-server/   Good!  ","categories": ["Blog"],
        "tags": ["Blog"],
        "url": "/recent/Vs_code_error/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 6",
        "excerpt":"Chapter 6: Mechanism Limited Direct Execution Theme: OS sets up the trap handler and starting an interrupt timer, and then by only running processes in a restricted mode. many jobs running seemingly at the same time. Time Sharing Question: Performance Control Concurrency? OS disable interrupt during interrupt processing number of...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-6/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 7",
        "excerpt":"Low-level mechanisms of running processes Series of scheduling policies (disciplines) Number of simplifying assumptions → workload *The assumption of the chapter Each job runs for the same amount of time All jobs arrive at the same time All jobs only use the CPU (no I/O) The run-time of each job...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-7/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 13",
        "excerpt":"The abstraction: Address Space Early Systems OS was a set of routines that sat in memory Use the set of the memory Multiprogramming and Time Sharing Multiprogramming Utilization Efficiency Time Sharing Interactivity Protection The address space easy to use abstract of physical memory code have to live in memory somewhere...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-13/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 15",
        "excerpt":"Limited Direct Execution (LDE) Make the program run directly on the hardware OS gets involved and makes sure the “right” thing happens Efficient virtualization, interposing at that critical point interposing at those critical point in the time, OS ensure that it maintains the control Flexibility we like for program to...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-15/",
        "teaser": null
      },{
        "title": "InterProcess Communication",
        "excerpt":"Signal There can be hardware interrupts, but software interrupts as well GNU signal can be a great reference. Linux relies on GNU Signal API → type of interrupt, handler Signal1.c function pointer → address of the program handler has no return but one input value; signal input is given Check...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/IPC/",
        "teaser": null
      },{
        "title": "Paging & Segmentation",
        "excerpt":"Created by ChatGPT The main disadvantage of using segmentation in operating systems is the potential for fragmentation, which can occur in two forms: external fragmentation and internal fragmentation. External Fragmentation: This occurs when the free memory in the system becomes scattered in small chunks, making it difficult to allocate contiguous...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Paging&Segmentation/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 16",
        "excerpt":"Segmentation Why not have a base and bounds pair per logical segment Segment independently in physical memory Sparse address spaces What we need to first do is extract the offset into the heap Illegal address → segmentation fault Which Segment are we referring to? Explicit approach upper two bits heap...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-16/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 17",
        "excerpt":"Free-Space Management When free-space management becomes more difficult is when the free space with user-level memory-allocation memory Segmentation External Fragmentation Internal fragmentation if an allocator hands out chunks of memory bigger than that requested, any unasked for (and thus unused) space in such a chunk void pointer Low-level Mechanisms Splitting...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-17/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 18",
        "excerpt":"Paging: Introduction Page Split up our address space into fixed-size units With paging, physical memory is also split into some number of pages as well → page frame Advantages Flexibility → system will be able to support the abstraction of address space simplicity → OS keeps a free list of...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-18/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 19",
        "excerpt":"Paging: Faster Translations TLB: Translation-lookaside buffer Part of MMU: Memory-management unit hardware cache: unlike memory cache, it is visible Hardware-managed TLB extract virtual page number from virtual address and check TLB holds a translation TLB Hit : TLB hold the translation TLB Miss : TLB doesn’t have the translatinon In...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-19/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 20",
        "excerpt":"Paging: Smaller Tables Page tables are too big and thus consume too much memory. 32-bit address space (2^32 bytes), with 4KB (2^12 bytes) and 4-byte page-table entry Simple array-based page tables are too big, taking up far too much memory on typical systems We are in search of some techniques...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-20/",
        "teaser": null
      },{
        "title": "OS-HW2 Summary",
        "excerpt":"HW 2 First of all, it was the first assignment that I have not completed since I have start Computer Science Major… I slept 11 hours for 4 days. Delta debugging: a test input minimization technique that takes a target program together with a crashing test input, and then automatically...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/OS-HW2/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 21",
        "excerpt":"Beyound Physical Memory: Mechanisms Memory Hierarchy → additional level, if OS needs to support large address space, it needs to keep every portion of address spaces even if it is not currently using Hard Disk Drive Why do we want to support a single large space? It is convenient to...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-21/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 22",
        "excerpt":"Beyong Physical Memory: Policies Cache Management cache for virtual memory pages in the system Need to minimize cache misses Maximize the cache hit Average memory access time cost of disk access is so high in modern systems that even a tiny miss rate will quickly dominate the overall AMAT of...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-22/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 23",
        "excerpt":"Complete Virtual Memory Systems VAX/VMS operating system 1970’s and early 1980’s Linux Linux is a widely used system runs effectively on systems as small and underpowered as phones VAX/VMS Virtual Memory Digital Equipment Corporation massive player unfortunately, a series of bad decisions and the advent of the PC slowly The...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-23/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 26",
        "excerpt":"Concurrency: An introduction Virtual CPUs → illusion of large, private virtual memory; abstraction of address space A single running process → thread Multi-threaded State of a single thread Has own PC Context switch Process control block Multi-thread Thread control blocks Major differences between the thread and process Stack Single Thread:...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-26/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 27",
        "excerpt":"Thread API Thread Creation thread → a pointer to a structure of type pthread_t attribute → to specify any attributes this thread might have function pointer → a function name (start routine), which is passed a single argument of type void * (as indicated in the parentheses after start routine),...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-27/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 28",
        "excerpt":"Locks Lock variable Calling lock → acquire the lock and enter the ciritical section thre thread acquire the lock called the owner of the lock Unlock → free the lock again Pthread locks Mutex → mutual exclusion between threads one thread is in the critical section, it excludes the others...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-28/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 29",
        "excerpt":"Lock-based Concurrent Data structures thread safe Adding locks to a data structure to make it usable by threads makes the structure thread-safe Monitors Where locks are acquired and released automatically as you call and return from object methods Approximate counter When a thread running on a given core wishes to...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-29/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 30",
        "excerpt":"Condition Variables Checking whether a condition is true before continuing its execution If the parent thread might wish to check whether a child thread has been completed before continuing Waiting for a condition to become true → condition variable Explicit queue that threads can put themselves on when some state...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-30/",
        "teaser": null
      },{
        "title": "알고리즘 분석과 벚꽃",
        "excerpt":"거의 처음으로 한글로 블로그 포스팅을 써보는 것 같다! 아무래도 한국어가 제일 편하긴하다 ㅎ 블로그 포스팅을 학기 중에 하고자 헀지만 도저히 안되더라… 그래서 학기 중에 블로그 포스팅 할 것들 메모해놓고 방학 중에 일일히 쓰는 중이다! 날짜도 그 때 썼다고 생각하고 업로드 하는 중이기도 하고… ㅋㅋㅋ 한동에서의 3학년이 사망년이 되지 않기를 바라는...","categories": ["Blog"],
        "tags": ["Blog"],
        "url": "/recent/Prof.Yong-Algorithm-Analysis/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 31",
        "excerpt":"Semaphores both locks and condition variables to solve a broad range of relevant and interesting concurrency problems POSIX standard sem_wait() sem_post() sem_init() Second argument → 0: it will be shared between threads on same process Binary Semaphores it will wait only if the value is not greater than or equal...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-31/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 36",
        "excerpt":"Input/output device (I/O) System Architecture Hierarchiacal structure CPU, memory, memory BUS I/O bus PCI Peripheral Component Interconnect High-speed I/O devices such as graphics Peripheral bus Lower speed bus SATA, USB connects to disks, mice, keyboards Reasons Physics, cost a high-performance memory bus does not have much room to plug devices...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-36/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 37",
        "excerpt":"Hard Disk Drives the main form of persistent data storage The interface Consist of a large number of sectors (512 - bytes block) Multi-sector operation Updating the disk is atomic it will either complete in its entirety or it won’t complete at all torn write Basic Geometry Platter Circular hard...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-38/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 39",
        "excerpt":"File and Directories Persistence Storage HDD SSD Files and Directories inode number directory Directory tree (hierarchy) Root directory Subdirectory Separator Type of the file Creating file open() file descriptor Capability Reading and Writing files Strace trace the system calls made by a program Flags Not sequential reading and writing random...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-39/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 40",
        "excerpt":"File System Implementation Very Simple File System The file system is pure software we will not be adding hardware features to make some aspect of the file system work better The first is the data structure of the file system data and metadata access method → open(), read(), write() Overall...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-40/",
        "teaser": null
      },{
        "title": "Operating Systems: Three Easy Pieces Ch. 41",
        "excerpt":"Locality and the fast file system Old file system was simple The problem: Poor Performance UNIX file system treated the disk like it was a random-access memory Data was spread all over the place the data blocks of a file were often very far away from its inode, thus inducing...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-41/",
        "teaser": null
      },{
        "title": "Automatic Patch Generation with Context-based Change Application",
        "excerpt":"Automatic Patch Generation with Context-based Change Application Paper Jindae Kim, Sunghun Kim Goal: I am collecting changes from human-written patches for new patch candidate generation. Automatic patch generation technique leveraging human-written patches with our context-based change application technique used by ConFix. Summary: An effective patch generation technique should have a...","categories": ["APR"],
        "tags": ["APR"],
        "url": "/recent/ConFix/",
        "teaser": null
      },{
        "title": "Can We Automatically Fix Bugs by Learning Edit Operations?",
        "excerpt":"“Can We Automatically Fix Bugs by Learning Edit Operations?” Paper Summary: Implementing Hephaestus, a novel method to improve the accuracy of APR through learning to apply edit operations. Leverages neural machine translation and attempts to produce the edit operations needed. Learning edit operations does not offer an advantage over the...","categories": ["APR"],
        "tags": ["APR"],
        "url": "/recent/Can-We-Automatically-Fix-Bugs-by-Learning-Edit-Operations/",
        "teaser": null
      },{
        "title": "Clean Code Chapter 1",
        "excerpt":"What is Clean Code? Bjarne Stroustrup, Inventor of C++ Wasted Cycle are inelegant, not pleasing Error handling should be complete Focused; Each function, class, and module expose a single-minded attitude that remains entirely undistracted, and unpolluted, by the surrounding details Grady Booch, author of Object Oriented Analysis and Design with...","categories": ["Books"],
        "tags": ["Blog"],
        "url": "/recent/Clean_Code_Ch1/",
        "teaser": null
      },{
        "title": "Clean Code Chapter 2",
        "excerpt":"Using the appropriate Name will pay off in the short term and continue to pay in the long run Using Intention-Revealing Names Choosing good names takes time but saves more than it takes Choosing a name that specifies what is being measured and the unit of that measurement Things need...","categories": ["Books"],
        "tags": ["Blog"],
        "url": "/recent/Clean_Code_Ch2/",
        "teaser": null
      },{
        "title": "And Then There Were None 그리고 아무도 없었다",
        "excerpt":"추리 소설을 추천받았다. 아가사 크리스티의 그리고 아무도 없었다 였다. 소설을 그렇게 좋아하는 편은 아니라 이름만 들어본 작가였지만 오랜만에 소설을 읽어보자는 마음으로 책을 집어들었다. 와우. 정말 재밌게 읽었다. 그 자리에 앉아서 내리 2시간을 읽었다. 물론 소설이 짧기도 하다 알고 보니 내 주위는 다들 읽었더라… 이 재밌는 걸 자신들만 알고 있었다니… 물론...","categories": ["Books"],
        "tags": ["Blog"],
        "url": "/recent/And_Then_There_Were_None/",
        "teaser": null
      },{
        "title": "Clean Code Chapter 3",
        "excerpt":"How can we make a function communicate its intent? What attributes can we give that will allow a reader to intuit the kind of program they live inside? The function should be very small In 1999, every function was just two, three, or four lines long Each was transparent and...","categories": ["Books"],
        "tags": ["Blog"],
        "url": "/recent/Clean_Code_Ch3/",
        "teaser": null
      }]
