const fs= require('fs')
const path = require('path')
const rootPath = path.dirname(__dirname)
const docsRootPath = path.join(__dirname,'../documents')
console.log(docsRootPath)

module.exports = {
  title:'大标题',
  description:'小标题',
  base:'/',
  port: 9001,
  themeConfig: {
    logo:'/yiyangqianxi.jpg',
    nav: [
      { text: '📚用户手册', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar:generateSidebarConfig()
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': path.resolve(__dirname, '../assets/img')
      }
    }
  }
}

function generateSidebarConfig($path = docsRootPath) {
  const config = []
  const subFiles = fs.readdirSync($path, { withFileTypes: true })
  subFiles.forEach(file => {
    const fullPath = path.join($path, file.name)
    console.log(rootPath)
    // 格式化路径 \identity-support-management\docs\documents\1组织架构 -> /documents/1组织架构
    const formattedPath = fullPath.replace(rootPath, '').replace(/\\/g, '/')

    const { name, ext } = path.parse(file.name)
    // 文件，并且是文件名不是 README.md 的 markdown 文件
    if (file.isFile() && ext === '.md' && name !== 'README') {
      const params = {
        title: name,
        path: formattedPath.replace('.md', ''),
      }

      config.push(params)
    }

    // 目录
    else if (file.isDirectory()) {
      const params = {
        title: file.name,
        children: generateSidebarConfig(fullPath), // 递归遍历子目录生成配置
        // collapsable: false  // 让一个组永远都是展开状态
      }
      // 子目录下有 README.md 文件
      if (fs.existsSync(path.join(fullPath, 'README.md'))) {
        params.path = `${formattedPath}/`
      }
      // 子目录下有其它文件
      else if (params.children.length) {
        params.path = `${formattedPath}/${params.children[0].title}`
      }
      config.push(params)
    }
  })
  return config.sort(function(a,b){
    return compareVersion(a.title,b.title)
  })
}

function compareVersion(v1, v2) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i])
    const num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}
