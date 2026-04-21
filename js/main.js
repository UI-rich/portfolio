// 项目数据数组
const projectsData = [
    {
        id: 1,
        title: '碳擎3.0产品碳数据管理平台',
        image: 'images/home/碳擎3.0产品碳数据管理平台/封面.png',
        tags: ['B端UI', '设计迭代', '视觉能力'],
        description: '碳擎3.0产品碳数据管理平台，实现碳排放智能监测与管理',
        link: 'project1.html',
        category: 'B端UI'
    },
    {
        id: 2,
        title: '奇瑞汽车可持续发展管理平台',
        image: 'images/home/奇瑞汽车可持续发展管理平台.png',
        tags: ['B端UI', '交互与业务理解'],
        description: '实时数据监控系统，通过图表和地图直观展示业务数据。',
        link: 'about:blank',
        category: 'B端UI'
    },
    {
        id: 5,
        title: '内蒙古伊利乳业碳管理平台',
        image: 'images/home/内蒙古伊利乳业碳管理平台.png',
        tags: ['B端UI'],
        description: '内蒙古伊利乳业碳管理平台',
        link: 'about:blank',
        category: 'B端UI'
    },
    {
        id: 6,
        title: '中汽研碳足迹认证门户设计',
        image: 'images/home/中汽研碳足迹认证门户设计.png',
        tags: ['Web网页'],
        description: '中汽研碳足迹认证门户设计',
        link: 'about:blank',
        category: 'Web网页'
    },
    {
        id: 7,
        title: '江苏省特检院门户设计',
        image: 'images/home/江苏省特检院门户设计.png',
        tags: ['Web网页'],
        description: '江苏省特检院门户设计',
        link: 'about:blank',
        category: 'Web网页'
    },
    {
        id: 3,
        title: '设计组件制作与维护',
        image: 'images/home/设计组件制作与维护.png',
        tags: ['设计组件'],
        description: '设计组件制作与维护，构建可复用的设计系统组件库',
        link: 'about:blank',
        category: '其他'
    },
    {
        id: 4,
        title: '江苏省零碳园区可视化大屏',
        image: 'images/home/江苏省零碳园区可视化大屏.png',
        tags: ['可视化大屏', '数字孪生', 'AI应用'],
        description: '江苏省零碳园区可视化大屏，实现园区碳排放实时监测与智能分析',
        link: 'about:blank',
        category: '可视化大屏'
    }
];

// 渲染首页代表作品
function renderFeaturedProjects() {
    const featuredGrid = document.querySelector('.featured-grid');
    if (!featuredGrid) return;
    
    featuredGrid.innerHTML = '';
    
    const featuredProjects = projectsData.filter(project =>
        project.title.includes('碳擎3.0') ||
        project.title.includes('奇瑞') ||
        project.title.includes('设计组件') ||
        project.title.includes('可视化大屏')
    );
    
    featuredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'featured-card';
        const isCarbonProject = project.title.includes('碳擎3.0');
        
        if (!isCarbonProject) {
            card.classList.add('has-overlay');
        }
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="featured-img">
            ${!isCarbonProject ? `
            <div class="coming-soon-overlay">
                <span class="coming-soon-text">奋力产出中~</span>
            </div>
            ` : ''}
            <div class="featured-content">
                <h3 class="featured-title">${project.title}</h3>
                ${project.tags.length > 0 ? `
                <div class="featured-tags">
                    ${project.tags.map(tag => `<span class="featured-tag">${tag}</span>`).join('')}
                </div>
                ` : ''}
                <p class="featured-description">${project.description}</p>
            </div>
        `;
        
        if (isCarbonProject) {
            card.addEventListener('click', function() {
                window.open(project.link, '_blank');
            });
        }
        
        featuredGrid.appendChild(card);
    });
    
    // 触发动画
    setTimeout(() => {
        const cards = document.querySelectorAll('.featured-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 200);
        });
    }, 100);
}

// 渲染项目页面全部项目（支持筛选）
function renderAllProjects(category = '全部') {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    // 根据分类筛选项目
    let filteredProjects = projectsData;
    if (category !== '全部') {
        filteredProjects = projectsData.filter(project => project.category === category);
    }
    
    if (filteredProjects.length === 0) {
        // 没有内容时显示空状态
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = '<img src="images/大屏缺省页.png" alt="暂无数据" class="empty-state-image">';
        projectsGrid.appendChild(emptyState);
        return;
    }
    
    filteredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        const isCarbonProject = project.title.includes('碳擎3.0');
        
        if (!isCarbonProject) {
            card.classList.add('has-overlay');
        }
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            ${!isCarbonProject ? `
            <div class="coming-soon-overlay">
                <span class="coming-soon-text">奋力产出中~</span>
            </div>
            ` : ''}
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                ${project.tags.length > 0 ? `
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                ` : ''}
                <p class="project-description">${project.description}</p>
            </div>
        `;
        
        if (isCarbonProject) {
            card.addEventListener('click', function() {
                window.open(project.link, '_blank');
            });
        }
        
        projectsGrid.appendChild(card);
    });
    
    // 触发动画
    setTimeout(() => {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 200);
        });
    }, 100);
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const modules = document.querySelectorAll('.module');
    const viewProjectsBtn = document.querySelector('.btn');

    // 初始化渲染
    renderFeaturedProjects();
    renderAllProjects();
    
    // 项目分类tab点击事件
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有active类
            tabBtns.forEach(b => b.classList.remove('active'));
            // 添加active类到当前点击的按钮
            this.classList.add('active');
            
            // 获取当前分类
            const category = this.textContent;
            // 重新渲染项目
            renderAllProjects(category);
        });
    });
    
    // 底部导航栏点击事件
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    bottomNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有active类
            bottomNavItems.forEach(i => i.classList.remove('active'));
            // 添加active类到当前点击的按钮
            this.classList.add('active');
            
            // 同步顶部导航的状态
            const target = this.getAttribute('data-target');
            navTabs.forEach(tab => {
                if (tab.getAttribute('data-target') === target) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            
            // 隐藏所有模块
            modules.forEach(module => {
                module.classList.add('hidden');
                module.classList.remove('active');
            });
            
            // 显示目标模块
            if (target === 'hero') {
                // 显示首页相关模块：hero + featured-projects
                const heroModule = document.getElementById('hero');
                const featuredModule = document.getElementById('featured-projects');
                if (heroModule) {
                    heroModule.classList.remove('hidden');
                    heroModule.classList.add('active');
                }
                if (featuredModule) {
                    featuredModule.classList.remove('hidden');
                    featuredModule.classList.add('active');
                }
            } else {
                // 显示其他模块
                const targetModule = document.getElementById(target);
                if (targetModule) {
                    targetModule.classList.remove('hidden');
                    targetModule.classList.add('active');
                }
            }

            // 滚动到模块顶部
            window.scrollTo(0, 0);
        });
    });

    modules.forEach(module => {
        const id = module.getAttribute('id');
        if (id === 'hero' || id === 'featured-projects') {
            module.classList.add('active');
        } else {
            module.classList.add('hidden');
        }
    });
    
    // 博文点击事件 - 在新标签页打开
    const blogItems = document.querySelectorAll('.blog-item');
    blogItems.forEach(item => {
        item.addEventListener('click', function() {
            const blogId = this.getAttribute('data-blog-id');
            if (blogId === '1') {
                // 在新标签页打开博文详情
                window.open('blog1.html', '_blank');
            }
        });
    });

    navTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            navTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const target = this.getAttribute('data-target');
            
            modules.forEach(module => {
                module.classList.add('hidden');
                module.classList.remove('active');
            });
            
            if (target === 'hero') {
                // 显示首页相关模块：hero + featured-projects
                const heroModule = document.getElementById('hero');
                const featuredModule = document.getElementById('featured-projects');
                if (heroModule) {
                    heroModule.classList.remove('hidden');
                    heroModule.classList.add('active');
                }
                if (featuredModule) {
                    featuredModule.classList.remove('hidden');
                    featuredModule.classList.add('active');
                }
            } else {
                // 显示其他模块
                const targetModule = document.getElementById(target);
                if (targetModule) {
                    targetModule.classList.remove('hidden');
                    targetModule.classList.add('active');
                }
            }

            // 滚动到模块顶部
            window.scrollTo(0, 0);
        });
    });

    if (viewProjectsBtn) {
        viewProjectsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            modules.forEach(module => {
                module.classList.add('hidden');
                module.classList.remove('active');
            });
            
            const aboutModule = document.getElementById('about');
            if (aboutModule) {
                aboutModule.classList.remove('hidden');
                aboutModule.classList.add('active');
            }
            
            navTabs.forEach(tab => {
                tab.classList.remove('active');
            });
            const aboutTab = document.querySelector('[data-target="about"]');
            if (aboutTab) {
                aboutTab.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(17, 24, 39, 0.95)';
        } else {
            navbar.style.background = 'rgba(17, 24, 39, 0.6)';
        }
    });

    function handleScrollAnimation() {
        const projectCards = document.querySelectorAll('.project-card');
        const projectsSection = document.getElementById('projects');
        const featuredProjectsSection = document.getElementById('featured-projects');
        
        if (projectsSection) {
            const sectionTop = projectsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.8) {
                projectCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, index * 150);
                });
            }
        }
        
        if (featuredProjectsSection) {
            const sectionTop = featuredProjectsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.8) {
                const featuredCards = featuredProjectsSection.querySelectorAll('.featured-card');
                featuredCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, index * 150);
                });
            }
        }
    }

    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);
    
    const nodes = document.querySelectorAll('.timeline-node');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    const timelineTitle = document.getElementById('timelineTitle');
    const exploreBtn = document.getElementById('exploreBtn');
    const year2002 = document.getElementById('year2002');

    function updateTimeline() {
        nodes.forEach((node, index) => {
            node.classList.toggle('active', index === currentIndex);
        });

        const timelineMask = document.querySelector('.timeline-mask');
        const year2017 = document.getElementById('year2017');
        const year2020 = document.getElementById('year2020');
        const year2022 = document.getElementById('year2022');
        const year2024 = document.getElementById('year2024');
        const year2026 = document.getElementById('year2026');
        
        year2002.classList.remove('active', 'slide-left', 'top');
        if (year2017) {
            year2017.classList.remove('active', 'slide-left', 'top');
        }
        if (year2020) {
            year2020.classList.remove('active', 'slide-left', 'top');
        }
        if (year2022) {
            year2022.classList.remove('active', 'slide-left', 'top');
        }
        if (year2024) {
            year2024.classList.remove('active', 'slide-left', 'top');
        }
        if (year2026) {
            year2026.classList.remove('active', 'slide-left', 'top');
        }
        
        if (currentIndex === 0 || currentIndex === 7) {
            timelineTitle.classList.remove('slide-left');
            if (currentIndex === 7) {
                timelineTitle.style.display = 'none';
                if (exploreBtn) {
                    exploreBtn.classList.add('show');
                }
            } else {
                timelineTitle.style.display = 'block';
                if (exploreBtn) {
                    exploreBtn.classList.remove('show');
                }
            }
            if (timelineMask) {
                timelineMask.style.background = 'rgba(0, 0, 0, 0.3)';
            }
        } else if (currentIndex === 1) {
            timelineTitle.classList.add('slide-left');
            year2002.classList.add('active');
            if (exploreBtn) {
                exploreBtn.classList.remove('show');
            }
            if (timelineMask) {
                timelineMask.style.background = 'rgba(0, 0, 0, 0.6)';
            }
        } else if (currentIndex === 2) {
            timelineTitle.classList.add('slide-left');
            year2002.classList.add('slide-left');
            if (year2017) {
                year2017.classList.add('active');
            }
            if (exploreBtn) {
                exploreBtn.classList.remove('show');
            }
            if (timelineMask) {
                timelineMask.style.background = 'rgba(0, 0, 0, 0.6)';
            }
        } else if (currentIndex === 3) {
            timelineTitle.classList.add('slide-left');
            if (year2017) {
                year2017.classList.add('slide-left');
            }
            if (year2020) {
                year2020.classList.add('active');
            }
            if (exploreBtn) {
                exploreBtn.classList.remove('show');
            }
            if (timelineMask) {
                timelineMask.style.background = 'rgba(0, 0, 0, 0.6)';
            }
        } else if (currentIndex === 4) {
            timelineTitle.classList.add('slide-left');
            if (year2020) {
                year2020.classList.add('slide-left');
            }
            if (year2022) {
                year2022.classList.add('active');
            }
            if (exploreBtn) {
                exploreBtn.classList.remove('show');
            }
            if (timelineMask) {
                timelineMask.style.background = 'rgba(0, 0, 0, 0.6)';
            }
        } else if (currentIndex === 5) {
            timelineTitle.classList.add('slide-left');
            if (year2022) {
                year2022.classList.add('slide-left');
            }
            if (year2024) {
                year2024.classList.add('active');
            }
            if (exploreBtn) {
                exploreBtn.classList.remove('show');
            }
            if (timelineMask) {
                timelineMask.style.background = 'rgba(0, 0, 0, 0.6)';
            }
        } else if (currentIndex === 6) {
            timelineTitle.classList.add('slide-left');
            if (year2024) {
                year2024.classList.add('slide-left');
            }
            if (year2026) {
                year2026.classList.add('active');
            }
            if (exploreBtn) {
                exploreBtn.classList.remove('show');
            }
            if (timelineMask) {
                timelineMask.style.background = 'rgba(0, 0, 0, 0.6)';
            }
        } else {
            timelineTitle.classList.add('slide-left');
            if (timelineMask) {
                timelineMask.style.background = 'rgba(0, 0, 0, 0.6)';
            }
        }
    }

    function goToIndex(index) {
        if (index >= 0 && index < nodes.length) {
            currentIndex = index;
            updateTimeline();
        }
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => goToIndex(currentIndex - 1));
        nextBtn.addEventListener('click', () => goToIndex(currentIndex + 1));
    }

    nodes.forEach((node, index) => {
        node.addEventListener('click', () => goToIndex(index));
    });

    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const blogSection = document.getElementById('blog');
            if (blogSection) {
                const aboutSection = document.querySelector('.about');
                const aboutBottom = aboutSection.offsetTop + aboutSection.offsetHeight;
                window.scrollTo({
                    top: aboutBottom,
                    behavior: 'smooth'
                });
            }
        });
    }

    let scrollCount = 0;
    let lastDirection = 0;
    let isSwitching = false;
    const timelineContainer = document.querySelector('.timeline-container-full');
    if (timelineContainer) {
        timelineContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (isSwitching) return;

            const direction = e.deltaY > 0 ? 1 : -1;

            if (currentIndex === 7 && direction > 0) {
                const aboutContent = document.querySelector('.about-content');
                if (aboutContent) {
                    const aboutContentTop = aboutContent.offsetTop - 64; // 减去导航栏高度
                    window.scrollTo({
                        top: aboutContentTop,
                        behavior: 'smooth'
                    });
                }
                return;
            }

            if (direction < 0 && currentIndex === 0) {
                const aboutEmptyFirstScreen = document.querySelector('.about-empty-first-screen');
                if (aboutEmptyFirstScreen) {
                    const aboutEmptyTop = aboutEmptyFirstScreen.offsetTop - 64; // 减去导航栏高度
                    window.scrollTo({
                        top: aboutEmptyTop,
                        behavior: 'smooth'
                    });
                }
                return;
            }

            if (direction !== lastDirection) {
                scrollCount = 0;
                lastDirection = direction;
            }
            scrollCount++;
            if (scrollCount >= 3) {
                isSwitching = true;
                if (direction > 0 && currentIndex < nodes.length - 1) {
                    goToIndex(currentIndex + 1);
                } else if (direction < 0 && currentIndex > 0) {
                    goToIndex(currentIndex - 1);
                }
                scrollCount = 0;
                setTimeout(() => {
                    isSwitching = false;
                }, 500);
            }
        });
    }

    updateTimeline();
});

// 关于我模块的全屏滚动功能
function initAboutFullscreenScroll() {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;

    const sections = [
        document.querySelector('.about-empty-first-screen'),
        document.querySelector('.timeline-container-full'),
        document.querySelector('.about-content')
    ];

    let currentSectionIndex = 0;
    let isScrolling = false;

    // 计算每个区域的位置
    function getSectionPositions() {
        return sections.map(section => {
            const rect = section.getBoundingClientRect();
            return {
                top: rect.top + window.scrollY,
                bottom: rect.top + window.scrollY + rect.height
            };
        });
    }

    // 滚动到指定区域
    function scrollToSection(index) {
        if (index < 0 || index >= sections.length || isScrolling) return;
        
        isScrolling = true;
        const position = getSectionPositions()[index];
        
        window.scrollTo({
            top: position.top - 64, // 减去导航栏高度
            behavior: 'smooth'
        });
        
        currentSectionIndex = index;
        
        setTimeout(() => {
            isScrolling = false;
        }, 800);
    }

    // 监听滚动事件
    window.addEventListener('wheel', (e) => {
        if (isScrolling) return;
        
        // 检查是否在about模块内
        const aboutRect = aboutSection.getBoundingClientRect();
        if (aboutRect.top > window.innerHeight || aboutRect.bottom < 0) {
            return;
        }
        
        const direction = e.deltaY > 0 ? 1 : -1;
        
        // 第一页：向下滚动到第二页
        if (currentSectionIndex === 0 && direction > 0) {
            scrollToSection(1);
            return;
        }
        
        // 第三页：向上滚动到第二页
        if (currentSectionIndex === 2 && direction < 0) {
            scrollToSection(1);
            return;
        }
        
        // 第二页：这里由时间轴的滚动逻辑处理
        // 时间轴的滚动逻辑已经在timeline部分实现
    });

    // 监听滚动结束事件，更新当前区域
    window.addEventListener('scroll', () => {
        if (isScrolling) return;
        
        const positions = getSectionPositions();
        const scrollPosition = window.scrollY + 100;
        
        for (let i = 0; i < positions.length; i++) {
            if (scrollPosition >= positions[i].top && scrollPosition < positions[i].bottom) {
                currentSectionIndex = i;
                break;
            }
        }
    });
}

// 初始化关于我模块的全屏滚动
initAboutFullscreenScroll();