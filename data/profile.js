/**
 * Profile data object used to populate the resume/portfolio website.
 * Contains personal info, skills, experience, projects, education, and certifications.
 */
const profileData = {
  title: "IT Resume",
  name: "Milan Cvetic",
  sub_title: "Senior Information Technology Manager / Systems Architect",
  logoURL: "mcvetic.jpeg",
  status: "Available for Opportunities",
  location: "Honolulu, Hawaii, USA",
  metrics: [
    { label: "Years Experience", value: "20+", icon: "fa-solid fa-briefcase" },
    { label: "Data Centers Built", value: "3", icon: "fa-solid fa-server" },
    { label: "Certifications", value: "6+", icon: "fa-solid fa-certificate" },
    { label: "Core Domains", value: "Cloud & DevOps", icon: "fa-solid fa-cloud" },
  ],
  // About section containing the professional summary and contact details
  about: {
    intro: `Insightful Information Technology Manager / Systems Engineer with 20 years of IT leadership experience, including oversight of enterprise infrastructure, application support, and security services. Dedicated to customer satisfaction with focused delivery of technical solutions. Proven leader in directing operations, maintenance, and support of complex distributed systems. Develops creative business solutions, leveraging diverse methodologies and delivering engineering solutions for leading organizations. Highly adept in requests for proposal development, technology needs assessments, and staff training. Recently focused on implementing AI-driven solutions across Azure and AWS platforms, including intelligent automation, document processing, and generative AI integrations.`,
    contact: {
      email: "psyunix [at] gmail [dot] com", // Obfuscated for scraping protection; normalized in JS
      phone: "+1 808 two84 zero 781", // Obfuscated; JS will only link if enough digits
      address: "Honolulu, Hawaii, USA",
    },
  },
  // Social media and external links
  links: [
    {
      title: "LinkedIn",
      src: "https://www.linkedin.com/in/milancvetic/",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      title: "GitHub",
      src: "https://github.com/psyunix",
      iconClass: "fa-brands fa-github",
    },
    {
      title: "Website",
      src: "https://psyunix.com",
      iconClass: "fa-solid fa-globe",
    },
  ],
  // Skills grouped by category
  skills: [
    {
      title: "Cloud Platforms",
      icon: "fa-solid fa-cloud",
      tags: ["Azure", "AWS", "GCP", "OCI", "OpenShift", "VMware Cloud"],
      value: "Azure, AWS, GCP, OCI, OpenShift, VMware Cloud",
    },
    {
      title: "DevOps & Automation",
      icon: "fa-solid fa-gears",
      tags: ["Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "Git", "GitHub Actions", "Azure DevOps", "GitLab CI/CD", "Vercel"],
      value: "Docker, Kubernetes, Terraform, Ansible, Jenkins, Git, CI/CD, GitHub Actions, Azure DevOps Pipelines, GitLab CI/CD, Vercel",
    },
    {
      title: "Virtualization & Infrastructure",
      icon: "fa-solid fa-server",
      tags: ["VMware vSphere", "vCenter", "KVM", "Hyper-V", "Citrix", "VDI", "Veeam", "SAN/NAS", "NetApp"],
      value: "VMware, KVM, Hyper-V, Citrix, VDI, Veeam, SAN/NAS",
    },
    {
      title: "Scripting & Languages",
      icon: "fa-solid fa-code",
      tags: ["Python", "Bash", "PowerShell", "YAML", "JSON", "JavaScript", "HTML5", "CSS3", "C"],
      value: "Python, Bash, C, PowerShell, YAML, JSON, JavaScript, HTML5, CSS3",
    },
    {
      title: "Security & Monitoring",
      icon: "fa-solid fa-shield-halved",
      tags: ["Zero Trust (ZTA)", "MFA", "SAML 2.0", "OAuth/SSO", "IAM", "Okta", "Vault", "Nessus", "Grafana", "Prometheus", "Nagios", "Splunk", "ELK", "SIEM", "WAF"],
      value: "ZTA, MFA, SAML 2.0, OAuth/SSO, RBAC, IAM, Okta, Vaults, Nessus, Grafana, Prometheus, Nagios, Splunk, ELK, SIEM, DLP, WAF, IPS/IDS, Firewalls, Antivirus",
    },
    {
      title: "Networking",
      icon: "fa-solid fa-network-wired",
      tags: ["Cisco", "Fortinet", "NSGs", "IPsec/VPN", "TCP/IP", "WAN/LAN", "DNS/DHCP", "SSH/SFTP", "Load Balancing", "Proxies", "VoIP"],
      value: "Cisco, Fortinet, NSGs, IPsec/VPN, TCP/IP, WAN/LAN, DNS/DHCP/SSH/SFTP/HTTPS, LB, Proxies, VoIP",
    },
    {
      title: "IT Operations & Standards",
      icon: "fa-solid fa-list-check",
      tags: ["DR/BC", "ITIL", "ITSM", "Scrum/Agile", "ISO27001", "PCI-DSS", "NIST", "SRE"],
      value: "DR/BC, ITIL, ITSM, Scrum/Agile, ISO27001, PCI-DSS, NIST, SRE",
    },
    {
      title: "Databases (DBMS)",
      icon: "fa-solid fa-database",
      tags: ["MS SQL", "PostgreSQL", "MySQL", "Oracle"],
      value: "MS SQL, PostgreSQL, MySQL, Oracle",
    },
    {
      title: "Operating Systems",
      icon: "fa-solid fa-desktop",
      tags: ["Linux (RHEL, CentOS, Debian, Ubuntu)", "Unix/FreeBSD", "Solaris", "Windows Server", "macOS"],
      value: "macOS, Windows, Linux (RHEL, CentOS, Debian, Ubuntu), Unix/FreeBSD, Solaris",
    },
    {
      title: "AI Tools & Productivity",
      icon: "fa-solid fa-brain",
      tags: ["Claude", "ChatGPT", "Azure AI", "AWS AI", "ServiceNow", "Jira", "Slack", "M365", "HAProxy", "NGINX"],
      value: "GAI tools: Claude, ChatGPT, Azure/AWS AI, Google Workspace, M365, Slack, ServiceNow, Jira, Scrum/Agile, GitHub, CI/CD, Terraform, Ansible, Grafana/Prometheus, HAProxy/NGINX, Tomcat",
    },
  ],
  // Professional work experience history
  experiences: [
    {
      organization: "University of Hawai‘i | Information Technology Center",
      location: "Honolulu, Hawaii, USA",
      title: "IT Systems Specialist",
      date: "2025 - Present",
      skills: ["Linux", "Windows Server", "VMware vSphere", "vCenter", "SAN/NAS", "Enterprise Backup", "Automation"],
      details: [
        "Install, configure, and maintain enterprise Linux and Windows operating systems supporting Information Technology Services (ITS) mission-critical projects.",
        "Administer VMware vSphere hypervisors, vCenter management systems, and enterprise server storage management software supporting ITS virtualization infrastructure.",
        "Provision and maintain high-performance server and storage hardware underlying university-wide virtualization infrastructure.",
        "Directly execute enterprise backup operations to safeguard and restore virtual machines, databases, and critical filesystem data.",
        "Proactively monitor availability and performance of systems infrastructure, ensuring rapid incident resolution and high uptime.",
        "Develop, document, and standardize operating procedures (SOPs) for Linux and Windows systems lifecycle management.",
        "Design and script automation tooling to streamline routine administration and enhance overall infrastructure reliability.",
        "Serve as Designated Responsible Individual (DRI) on-call to triage incidents, manage system degradation, and enforce security errata patching.",
      ],
    },
    {
      organization: "SAS Institute",
      location: "Cary, North Carolina (Honolulu Office)",
      title: "Sr Systems Architect - Risk Research & Quantitative Solutions",
      date: "Jul 2022 - 2025",
      skills: ["Azure", "AWS", "GCP", "SAS Viya", "VMware", "OpenShift", "Docker", "Kubernetes", "Terraform", "Prometheus", "Grafana"],
      details: [
        "Architected, deployed, and maintained SAS Viya enterprise environments across Azure, AWS, and GCP with high availability and resilience.",
        "Directed VMware virtualization strategies to maintain optimal compute/storage resource allocation and horizontal scalability.",
        "Drove DevOps and CI/CD automation leveraging Docker, Kubernetes, Git, Terraform, Grafana, and Prometheus to streamline provisioning and observability.",
        "Troubleshot and resolved complex distributed system bottlenecks, ensuring seamless low-latency performance for quantitative risk research.",
        "Implemented cloud security best practices, Identity & Access Management (IAM), data encryption at rest/in-transit, and compliance frameworks.",
        "Optimized hybrid cloud network routing and multi-tier server topologies between on-premises datacenters and multi-cloud environments.",
        "Collaborated closely with research and data science teams to deliver secure, scalable high-performance compute environments.",
        "Evaluated and integrated emerging cloud-native and AI-driven automation technologies to enhance cost efficiency and operational resilience.",
      ],
    },
    {
      organization: "Kamakura Corporation",
      location: "Honolulu, Hawaii, USA",
      title: "Director of Information Technology (CTO)",
      date: "Jun 2019 - Jul 2022",
      skills: ["Azure DevOps", "AWS", "M365", "Fortinet", "OKTA", "VMware", "Veeam", "Nessus", "PCI-DSS", "Python", "PowerShell"],
      details: [
        "Directed overall IT strategy, datacenter engineering, internal application support, and 24/7 production network operations.",
        "Oversaw deployment, client technical support, and Azure DevOps CI/CD pipelines for Kamakura Risk Manager (KRM) and KRIS cloud services across two colocation datacenters.",
        "Aligned technological roadmaps with corporate business objectives, balancing continuous innovation with robust risk management.",
        "Developed and enforced IT security policies, compliance standards (PCI-DSS), disaster recovery protocols, and performance metrics.",
        "Administered enterprise ecosystem: Microsoft 365, Active Directory, Dell/IBM/TrueNAS SAN/NAS, Nessus Vulnerability Scanner, Fortinet IPsec/VPN, Okta IAM, VMware, Veeam Cloud Backup, and Nagios XI.",
        "Automated administrative workflows with Python, Bash, and PowerShell scripts across MS SQL, Oracle, and PostgreSQL databases.",
      ],
    },
    {
      organization: "Superb Internet Corp",
      location: "Honolulu, Hawaii, USA",
      title: "Senior System Engineer",
      date: "Oct 2016 - Jun 2021",
      skills: ["KVM", "VMware Cloud", "AWS", "Azure", "Cisco", "Fortinet", "HAProxy", "Ansible", "Oracle", "MySQL", "ISO27001"],
      details: [
        "Architected and maintained infrastructure across three Tier-3/4 enterprise data centers in the United States.",
        "Delivered Tier-3/4 engineering support for Unix/Linux production, staging, and development server fleets.",
        "Managed full virtualization lifecycle across OnApp (RedHat/KVM) Cloud and VMware Cloud clusters with high-availability disaster recovery.",
        "Proactively analyzed security logs, mitigated network threats, and maintained ISO audit and PCI compliance using Nessus scanners.",
        "Configured Cisco/Fortinet IPsec VPNs, HAProxy load balancers, GlusterFS distributed storage, NetApp SAN/NAS, and database clusters (MySQL, PostgreSQL, Oracle).",
        "Automated server configuration, patching, and deployment pipelines using Ansible playbooks.",
      ],
    },
    {
      organization: "National Library of Serbia",
      location: "Belgrade, Serbia",
      title: "Head of IT Department - System Engineer",
      date: "Aug 2009 - Apr 2016",
      skills: ["VMware VDI", "IBM Blade", "NetApp", "Cisco", "Active Directory", "Oracle", "FreeBSD", "Nagios"],
      details: [
        "Led a multidisciplinary IT team supporting 250+ staff members and over 1,000 daily digital library patrons.",
        "Project manager for the design and construction of an in-house enterprise datacenter featuring VMware PCoIP VDI (140 zero clients), IBM Blade systems, and NetApp FAS2420 storage.",
        "Architected core digital infrastructure for National Web Archiving, Europeana Digital Library metadata aggregation, and Serbian Library Consortium (KoBSON).",
        "Administered OPAC library systems on HP True UNIX, FreeBSD, and Linux; managed Microsoft Active Directory, Oracle, MS SQL, and MySQL databases.",
        "Implemented enterprise network security policies using Cisco networking, Fortinet firewalls, Nessus vulnerability management, and Nagios monitoring.",
      ],
    },
    {
      organization: "Automobile Association of Serbia & AMS Insurance Corp",
      location: "Belgrade, Serbia",
      title: "Senior System Engineer",
      date: "Jan 2013 - Dec 2016",
      skills: ["VMware Cluster", "EMC RecoverPoint", "FreeBSD", "Cisco", "P2V Migration", "VoIP", "Active Directory"],
      details: [
        "Designed, installed, and maintained primary datacenter and Disaster Recovery facility utilizing EMC RecoverPoint SAN/NAS and Dell-VMware clusters.",
        "Re-engineered corporate IT infrastructure across virtualization, DNS/DHCP, LDAP, automated server provisioning, load balancing, network storage, and enterprise VoIP.",
        "Architected and managed multi-site VMware infrastructure; executed complex Physical-to-Virtual (P2V) server migrations across Solaris, Linux, and Windows.",
        "Deployed and maintained nationwide mission-critical vehicle insurance applications across border checkpoints, service hubs, and police stations on FreeBSD Unix and Windows.",
      ],
    },
    {
      organization: "IT Academy",
      location: "Belgrade, Serbia",
      title: "Computer Science Instructor",
      date: "Nov 2008 - May 2010",
      skills: ["Linux (RHEL/Debian)", "Systems Administration", "Curriculum Design", "Mentorship"],
      details: [
        "Delivered intermediate-level Linux systems administration curriculum to cohorts of 60 students across multiple lab sections.",
        "Provided hands-on instruction covering Linux installation, shell scripting, user/group security, daemon management, filesystems, and system recovery.",
      ],
    },
    {
      organization: "BeocityNet ISP",
      location: "Belgrade, Serbia",
      title: "IT System Administrator",
      date: "Oct 2008 - Apr 2009",
      skills: ["Linux", "FreeBSD", "VMware", "ISP Services", "24/7 Operations"],
      details: [
        "Delivered Tier-2/3 24/7 technical administration for 15,000+ broadband, dial-up, and Linux web hosting clients.",
        "Administered virtualized Linux and FreeBSD Unix servers in VMware environments; maintained DNS, mail, and web database servers.",
      ],
    },
    {
      organization: "VeratNet ISP",
      location: "Belgrade, Serbia",
      title: "IT System Administrator",
      date: "Jun 2007 - Jan 2008",
      skills: ["Solaris (SPARC)", "RHEL", "Cisco", "MikroTik", "Nagios", "MRTG"],
      details: [
        "Provided technical systems administration supporting 100,000+ subscribers across broadband, dial-up, and hosting services.",
        "Managed multi-vendor server environments: Solaris SPARC, Red Hat Enterprise Linux, and Windows Server.",
        "Configured Cisco, MikroTik, and Fortinet edge routing devices; monitored network telemetry using Nagios, Cacti, and MRTG.",
      ],
    },
  ],
  // Personal or open source projects
  projects: [
    {
      title: "Resume & Portfolio Web Application",
      duration: "2025",
      link: "https://github.com/psyunix/resume",
      desc: "A responsive, accessible resume web application featuring dark/light theme switching, skill filtering, PDF export optimization, and automated CI/CD deployment.",
      technologies: ["HTML5", "Vanilla CSS", "JavaScript", "Vercel", "GitHub Actions"],
    },
    {
      title: "Kubernetes 3-Node Kind Clusters (kube-3-kind)",
      duration: "2025",
      link: "https://github.com/psyunix/kube-3-kind",
      desc: "An automated multi-node Kubernetes cluster configuration built on kind (Kubernetes in Docker). Streamlines local cloud-native development, microservice testing, and CI/CD workflow validation.",
      technologies: ["Kubernetes", "kind", "Docker", "DevOps", "CI/CD", "Bash"],
    },
  ],
  // Educational background
  education: [
    {
      alma: "ICT - College for Expert Studies in Information",
      link: "https://en.ict.edu.rs/",
      duration: "2009 - 2011",
      std: "Professional Master, Specialist - Expert Engineer of Network Technologies",
      score: "GPA: 8.29 / 10",
    },
    {
      alma: "ITS - Information Technology School",
      link: "https://eng.its.edu.rs/",
      duration: "2006 - 2009",
      std: "Bachelor's degree, Engineer of Information Technologies",
      score: "GPA: 7.68 / 10",
    },
  ],
  // Professional certifications
  certifications: [
    {
      title: "AZ-104 Microsoft Azure Administrator",
      issuer: "Udemy / Microsoft",
      link: "https://www.udemy.com/certificate/UC-d6b1b188-ea79-4eb8-bc42-9e3517196abc",
      pdf: "https://www.udemy.com/certificate/UC-d6b1b188-ea79-4eb8-bc42-9e3517196abc",
      date: "2022",
      badge: "AZ-104",
      icon: "fa-brands fa-microsoft",
    },
    {
      title: "Red Hat Certified System Administrator (RHCSA)",
      issuer: "Udemy / Red Hat",
      link: "data/certs/RHCSA-milan_cvetic_udemy.pdf",
      pdf: "data/certs/RHCSA-milan_cvetic_udemy.pdf",
      date: "2024",
      badge: "RHCSA",
      icon: "fa-brands fa-redhat",
    },
    {
      title: "Windows Server 2022 Administration",
      issuer: "Udemy / Microsoft",
      link: "data/certs/WinSRV_2022_admin_Udemy.pdf",
      pdf: "data/certs/WinSRV_2022_admin_Udemy.pdf",
      date: "2025",
      badge: "MCSE",
      icon: "fa-brands fa-windows",
    },
    {
      title: "Kubernetes Certified (KCNA)",
      issuer: "Udemy / Linux Foundation",
      link: "data/certs/milan_cvetic_kcna.pdf",
      pdf: "data/certs/milan_cvetic_kcna.pdf",
      date: "2025",
      badge: "KCNA",
      icon: "fa-solid fa-dharmachakra",
    },
    {
      title: "VMware VCTA DataCenter Virtualization",
      issuer: "VMware",
      link: "data/certs/mcvetic_VCTA_DCV_2021.pdf",
      pdf: "data/certs/mcvetic_VCTA_DCV_2021.pdf",
      date: "2021",
      badge: "VCTA-DCV",
      icon: "fa-solid fa-server",
    },
    {
      title: "VMware VCP 4.1 Certified Professional",
      issuer: "VMware",
      link: "data/certs/mcvetic_vmware_4.1.pdf",
      pdf: "data/certs/mcvetic_vmware_4.1.pdf",
      date: "2011",
      badge: "VCP 4.1",
      icon: "fa-solid fa-server",
    },
  ],
  events: [],
};
