{
    "version": "0.1.0",
    "isShellCommand": true,
    "taskName": "Multiple_Via_sh",
    "showOutput": "always",
    "command": "bash",
    "suppressTaskName": false,
    "args": ["-c"],
    "tasks": [
        {
            "taskName": "go",
            "suppressTaskName": true,
            "isBuildCommand": true,
            "args": [
                "my_script.sh"
            ]
        }
	]
}