function getFormattedCreatedAt(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}:${String(date.getHours()).padStart(2, '0')}h-${String(date.getMinutes()).padStart(2, '0')}m-${String(date.getSeconds()).padStart(2, '0')}s`
}

module.exports = getFormattedCreatedAt;