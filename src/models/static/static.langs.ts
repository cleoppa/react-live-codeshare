const langs = [
    {
        "id": "plaintext",
        "extensions": [
            ".txt"
        ],
        "aliases": [
            "Plain Text",
            "text"
        ],
        "mimetypes": [
            "text/plain"
        ]
    },
    {
        "id": "json",
        "extensions": [
            ".json",
            ".bowerrc",
            ".jshintrc",
            ".jscsrc",
            ".eslintrc",
            ".babelrc",
            ".har"
        ],
        "aliases": [
            "JSON",
            "json"
        ],
        "mimetypes": [
            "application/json"
        ]
    },
    {
        "id": "abap",
        "extensions": [
            ".abap"
        ],
        "aliases": [
            "abap",
            "ABAP"
        ]
    },
    {
        "id": "apex",
        "extensions": [
            ".cls"
        ],
        "aliases": [
            "Apex",
            "apex"
        ],
        "mimetypes": [
            "text/x-apex-source",
            "text/x-apex"
        ]
    },
    {
        "id": "azcli",
        "extensions": [
            ".azcli"
        ],
        "aliases": [
            "Azure CLI",
            "azcli"
        ]
    },
    {
        "id": "bat",
        "extensions": [
            ".bat",
            ".cmd"
        ],
        "aliases": [
            "Batch",
            "bat"
        ]
    },
    {
        "id": "bicep",
        "extensions": [
            ".bicep"
        ],
        "aliases": [
            "Bicep"
        ]
    },
    {
        "id": "cameligo",
        "extensions": [
            ".mligo"
        ],
        "aliases": [
            "Cameligo"
        ]
    },
    {
        "id": "clojure",
        "extensions": [
            ".clj",
            ".cljs",
            ".cljc",
            ".edn"
        ],
        "aliases": [
            "clojure",
            "Clojure"
        ]
    },
    {
        "id": "coffeescript",
        "extensions": [
            ".coffee"
        ],
        "aliases": [
            "CoffeeScript",
            "coffeescript",
            "coffee"
        ],
        "mimetypes": [
            "text/x-coffeescript",
            "text/coffeescript"
        ]
    },
    {
        "id": "c",
        "extensions": [
            ".c",
            ".h"
        ],
        "aliases": [
            "C",
            "c"
        ]
    },
    {
        "id": "cpp",
        "extensions": [
            ".cpp",
            ".cc",
            ".cxx",
            ".hpp",
            ".hh",
            ".hxx"
        ],
        "aliases": [
            "C++",
            "Cpp",
            "cpp"
        ]
    },
    {
        "id": "csharp",
        "extensions": [
            ".cs",
            ".csx",
            ".cake"
        ],
        "aliases": [
            "C#",
            "csharp"
        ]
    },
    {
        "id": "csp",
        "extensions": [],
        "aliases": [
            "CSP",
            "csp"
        ]
    },
    {
        "id": "css",
        "extensions": [
            ".css"
        ],
        "aliases": [
            "CSS",
            "css"
        ],
        "mimetypes": [
            "text/css"
        ]
    },
    {
        "id": "dart",
        "extensions": [
            ".dart"
        ],
        "aliases": [
            "Dart",
            "dart"
        ],
        "mimetypes": [
            "text/x-dart-source",
            "text/x-dart"
        ]
    },
    {
        "id": "dockerfile",
        "extensions": [
            ".dockerfile"
        ],
        "filenames": [
            "Dockerfile"
        ],
        "aliases": [
            "Dockerfile"
        ]
    },
    {
        "id": "ecl",
        "extensions": [
            ".ecl"
        ],
        "aliases": [
            "ECL",
            "Ecl",
            "ecl"
        ]
    },
    {
        "id": "elixir",
        "extensions": [
            ".ex",
            ".exs"
        ],
        "aliases": [
            "Elixir",
            "elixir",
            "ex"
        ]
    },
    {
        "id": "fsharp",
        "extensions": [
            ".fs",
            ".fsi",
            ".ml",
            ".mli",
            ".fsx",
            ".fsscript"
        ],
        "aliases": [
            "F#",
            "FSharp",
            "fsharp"
        ]
    },
    {
        "id": "go",
        "extensions": [
            ".go"
        ],
        "aliases": [
            "Go"
        ]
    },
    {
        "id": "graphql",
        "extensions": [
            ".graphql",
            ".gql"
        ],
        "aliases": [
            "GraphQL",
            "graphql",
            "gql"
        ],
        "mimetypes": [
            "application/graphql"
        ]
    },
    {
        "id": "handlebars",
        "extensions": [
            ".handlebars",
            ".hbs"
        ],
        "aliases": [
            "Handlebars",
            "handlebars",
            "hbs"
        ],
        "mimetypes": [
            "text/x-handlebars-template"
        ]
    },
    {
        "id": "hcl",
        "extensions": [
            ".tf",
            ".tfvars",
            ".hcl"
        ],
        "aliases": [
            "Terraform",
            "tf",
            "HCL",
            "hcl"
        ]
    },
    {
        "id": "html",
        "extensions": [
            ".html",
            ".htm",
            ".shtml",
            ".xhtml",
            ".mdoc",
            ".jsp",
            ".asp",
            ".aspx",
            ".jshtm"
        ],
        "aliases": [
            "HTML",
            "htm",
            "html",
            "xhtml"
        ],
        "mimetypes": [
            "text/html",
            "text/x-jshtm",
            "text/template",
            "text/ng-template"
        ]
    },
    {
        "id": "ini",
        "extensions": [
            ".ini",
            ".properties",
            ".gitconfig"
        ],
        "filenames": [
            "config",
            ".gitattributes",
            ".gitconfig",
            ".editorconfig"
        ],
        "aliases": [
            "Ini",
            "ini"
        ]
    },
    {
        "id": "java",
        "extensions": [
            ".java",
            ".jav"
        ],
        "aliases": [
            "Java",
            "java"
        ],
        "mimetypes": [
            "text/x-java-source",
            "text/x-java"
        ]
    },
    {
        "id": "javascript",
        "extensions": [
            ".js",
            ".es6",
            ".jsx",
            ".mjs"
        ],
        "firstLine": "^#!.*\\bnode",
        "filenames": [
            "jakefile"
        ],
        "aliases": [
            "JavaScript",
            "javascript",
            "js"
        ],
        "mimetypes": [
            "text/javascript"
        ]
    },
    {
        "id": "julia",
        "extensions": [
            ".jl"
        ],
        "aliases": [
            "julia",
            "Julia"
        ]
    },
    {
        "id": "kotlin",
        "extensions": [
            ".kt"
        ],
        "aliases": [
            "Kotlin",
            "kotlin"
        ],
        "mimetypes": [
            "text/x-kotlin-source",
            "text/x-kotlin"
        ]
    },
    {
        "id": "less",
        "extensions": [
            ".less"
        ],
        "aliases": [
            "Less",
            "less"
        ],
        "mimetypes": [
            "text/x-less",
            "text/less"
        ]
    },
    {
        "id": "lexon",
        "extensions": [
            ".lex"
        ],
        "aliases": [
            "Lexon"
        ]
    },
    {
        "id": "lua",
        "extensions": [
            ".lua"
        ],
        "aliases": [
            "Lua",
            "lua"
        ]
    },
    {
        "id": "liquid",
        "extensions": [
            ".liquid",
            ".html.liquid"
        ],
        "aliases": [
            "Liquid",
            "liquid"
        ],
        "mimetypes": [
            "application/liquid"
        ]
    },
    {
        "id": "m3",
        "extensions": [
            ".m3",
            ".i3",
            ".mg",
            ".ig"
        ],
        "aliases": [
            "Modula-3",
            "Modula3",
            "modula3",
            "m3"
        ]
    },
    {
        "id": "markdown",
        "extensions": [
            ".md",
            ".markdown",
            ".mdown",
            ".mkdn",
            ".mkd",
            ".mdwn",
            ".mdtxt",
            ".mdtext"
        ],
        "aliases": [
            "Markdown",
            "markdown"
        ]
    },
    {
        "id": "mips",
        "extensions": [
            ".s"
        ],
        "aliases": [
            "MIPS",
            "MIPS-V"
        ],
        "mimetypes": [
            "text/x-mips",
            "text/mips",
            "text/plaintext"
        ]
    },
    {
        "id": "msdax",
        "extensions": [
            ".dax",
            ".msdax"
        ],
        "aliases": [
            "DAX",
            "MSDAX"
        ]
    },
    {
        "id": "mysql",
        "extensions": [],
        "aliases": [
            "MySQL",
            "mysql"
        ]
    },
    {
        "id": "objective-c",
        "extensions": [
            ".m"
        ],
        "aliases": [
            "Objective-C"
        ]
    },
    {
        "id": "pascal",
        "extensions": [
            ".pas",
            ".p",
            ".pp"
        ],
        "aliases": [
            "Pascal",
            "pas"
        ],
        "mimetypes": [
            "text/x-pascal-source",
            "text/x-pascal"
        ]
    },
    {
        "id": "pascaligo",
        "extensions": [
            ".ligo"
        ],
        "aliases": [
            "Pascaligo",
            "ligo"
        ]
    },
    {
        "id": "perl",
        "extensions": [
            ".pl"
        ],
        "aliases": [
            "Perl",
            "pl"
        ]
    },
    {
        "id": "pgsql",
        "extensions": [],
        "aliases": [
            "PostgreSQL",
            "postgres",
            "pg",
            "postgre"
        ]
    },
    {
        "id": "php",
        "extensions": [
            ".php",
            ".php4",
            ".php5",
            ".phtml",
            ".ctp"
        ],
        "aliases": [
            "PHP",
            "php"
        ],
        "mimetypes": [
            "application/x-php"
        ]
    },
    {
        "id": "postiats",
        "extensions": [
            ".dats",
            ".sats",
            ".hats"
        ],
        "aliases": [
            "ATS",
            "ATS/Postiats"
        ]
    },
    {
        "id": "powerquery",
        "extensions": [
            ".pq",
            ".pqm"
        ],
        "aliases": [
            "PQ",
            "M",
            "Power Query",
            "Power Query M"
        ]
    },
    {
        "id": "powershell",
        "extensions": [
            ".ps1",
            ".psm1",
            ".psd1"
        ],
        "aliases": [
            "PowerShell",
            "powershell",
            "ps",
            "ps1"
        ]
    },
    {
        "id": "pug",
        "extensions": [
            ".jade",
            ".pug"
        ],
        "aliases": [
            "Pug",
            "Jade",
            "jade"
        ]
    },
    {
        "id": "python",
        "extensions": [
            ".py",
            ".rpy",
            ".pyw",
            ".cpy",
            ".gyp",
            ".gypi"
        ],
        "aliases": [
            "Python",
            "py"
        ],
        "firstLine": "^#!/.*\\bpython[0-9.-]*\\b"
    },
    {
        "id": "qsharp",
        "extensions": [
            ".qs"
        ],
        "aliases": [
            "Q#",
            "qsharp"
        ]
    },
    {
        "id": "r",
        "extensions": [
            ".r",
            ".rhistory",
            ".rmd",
            ".rprofile",
            ".rt"
        ],
        "aliases": [
            "R",
            "r"
        ]
    },
    {
        "id": "razor",
        "extensions": [
            ".cshtml"
        ],
        "aliases": [
            "Razor",
            "razor"
        ],
        "mimetypes": [
            "text/x-cshtml"
        ]
    },
    {
        "id": "redis",
        "extensions": [
            ".redis"
        ],
        "aliases": [
            "redis"
        ]
    },
    {
        "id": "redshift",
        "extensions": [],
        "aliases": [
            "Redshift",
            "redshift"
        ]
    },
    {
        "id": "restructuredtext",
        "extensions": [
            ".rst"
        ],
        "aliases": [
            "reStructuredText",
            "restructuredtext"
        ]
    },
    {
        "id": "ruby",
        "extensions": [
            ".rb",
            ".rbx",
            ".rjs",
            ".gemspec",
            ".pp"
        ],
        "filenames": [
            "rakefile",
            "Gemfile"
        ],
        "aliases": [
            "Ruby",
            "rb"
        ]
    },
    {
        "id": "rust",
        "extensions": [
            ".rs",
            ".rlib"
        ],
        "aliases": [
            "Rust",
            "rust"
        ]
    },
    {
        "id": "sb",
        "extensions": [
            ".sb"
        ],
        "aliases": [
            "Small Basic",
            "sb"
        ]
    },
    {
        "id": "scala",
        "extensions": [
            ".scala",
            ".sc",
            ".sbt"
        ],
        "aliases": [
            "Scala",
            "scala",
            "SBT",
            "Sbt",
            "sbt",
            "Dotty",
            "dotty"
        ],
        "mimetypes": [
            "text/x-scala-source",
            "text/x-scala",
            "text/x-sbt",
            "text/x-dotty"
        ]
    },
    {
        "id": "scheme",
        "extensions": [
            ".scm",
            ".ss",
            ".sch",
            ".rkt"
        ],
        "aliases": [
            "scheme",
            "Scheme"
        ]
    },
    {
        "id": "scss",
        "extensions": [
            ".scss"
        ],
        "aliases": [
            "Sass",
            "sass",
            "scss"
        ],
        "mimetypes": [
            "text/x-scss",
            "text/scss"
        ]
    },
    {
        "id": "shell",
        "extensions": [
            ".sh",
            ".bash"
        ],
        "aliases": [
            "Shell",
            "sh"
        ]
    },
    {
        "id": "sol",
        "extensions": [
            ".sol"
        ],
        "aliases": [
            "sol",
            "solidity",
            "Solidity"
        ]
    },
    {
        "id": "aes",
        "extensions": [
            ".aes"
        ],
        "aliases": [
            "aes",
            "sophia",
            "Sophia"
        ]
    },
    {
        "id": "sparql",
        "extensions": [
            ".rq"
        ],
        "aliases": [
            "sparql",
            "SPARQL"
        ]
    },
    {
        "id": "sql",
        "extensions": [
            ".sql"
        ],
        "aliases": [
            "SQL"
        ]
    },
    {
        "id": "st",
        "extensions": [
            ".st",
            ".iecst",
            ".iecplc",
            ".lc3lib"
        ],
        "aliases": [
            "StructuredText",
            "scl",
            "stl"
        ]
    },
    {
        "id": "swift",
        "aliases": [
            "Swift",
            "swift"
        ],
        "extensions": [
            ".swift"
        ],
        "mimetypes": [
            "text/swift"
        ]
    },
    {
        "id": "systemverilog",
        "extensions": [
            ".sv",
            ".svh"
        ],
        "aliases": [
            "SV",
            "sv",
            "SystemVerilog",
            "systemverilog"
        ]
    },
    {
        "id": "verilog",
        "extensions": [
            ".v",
            ".vh"
        ],
        "aliases": [
            "V",
            "v",
            "Verilog",
            "verilog"
        ]
    },
    {
        "id": "tcl",
        "extensions": [
            ".tcl"
        ],
        "aliases": [
            "tcl",
            "Tcl",
            "tcltk",
            "TclTk",
            "tcl/tk",
            "Tcl/Tk"
        ]
    },
    {
        "id": "twig",
        "extensions": [
            ".twig"
        ],
        "aliases": [
            "Twig",
            "twig"
        ],
        "mimetypes": [
            "text/x-twig"
        ]
    },
    {
        "id": "typescript",
        "extensions": [
            ".ts",
            ".tsx"
        ],
        "aliases": [
            "TypeScript",
            "ts",
            "typescript"
        ],
        "mimetypes": [
            "text/typescript"
        ]
    },
    {
        "id": "vb",
        "extensions": [
            ".vb"
        ],
        "aliases": [
            "Visual Basic",
            "vb"
        ]
    },
    {
        "id": "xml",
        "extensions": [
            ".xml",
            ".dtd",
            ".ascx",
            ".csproj",
            ".config",
            ".wxi",
            ".wxl",
            ".wxs",
            ".xaml",
            ".svg",
            ".svgz",
            ".opf",
            ".xsl"
        ],
        "firstLine": "(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",
        "aliases": [
            "XML",
            "xml"
        ],
        "mimetypes": [
            "text/xml",
            "application/xml",
            "application/xaml+xml",
            "application/xml-dtd"
        ]
    },
    {
        "id": "yaml",
        "extensions": [
            ".yaml",
            ".yml"
        ],
        "aliases": [
            "YAML",
            "yaml",
            "YML",
            "yml"
        ],
        "mimetypes": [
            "application/x-yaml",
            "text/x-yaml"
        ]
    }
]

export default langs