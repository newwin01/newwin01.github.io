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
        "title": "Operating Systems: Three Easy Pieces Ch. 15",
        "excerpt":"Limited Direct Execution (LDE) Make the program run directly on the hardware OS gets involved and makes sure the “right” thing happens Efficient virtualization, interposing at that critical point interposing at those critical point in the time, OS ensure that it maintains the control Flexibility we like for program to...","categories": ["OS"],
        "tags": ["OS"],
        "url": "/recent/Chapter-15/",
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
      }]
