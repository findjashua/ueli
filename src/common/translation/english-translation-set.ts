import { TranslationSet } from "./translation-set";

// tslint:disable:object-literal-sort-keys for better readability
export const englishTranslationSet: TranslationSet = {
    trayIconShow: "Show",
    trayIconSettings: "Settings",
    trayIconQuit: "Quit",

    noSearchResultsFoundDescription: "",
    noSearchResultsFoundTitle: "No search results found",

    ueliCommandClearCaches: "Clear caches",
    ueliCommandClearCachesDescription: "Clears all caches of all plugins",
    ueliCommandEditSettingsFile: "Edit settings file",
    ueliCommandEditSettingsFileDescription: "Edit the settings file with your default text editor",
    ueliCommandExit: "Quit",
    ueliCommandExitDescription: "Quit ueli app",
    ueliCommandOpenSettings: "Settings",
    ueliCommandOpenSettingsDescription: "Change settings",
    ueliCommandRefreshIndexes: "Refresh indexes",
    ueliCommandRefreshIndexesDescription: "Refreshes all indexes of all plugins",
    ueliCommandReload: "Reload",
    ueliCommandReloadDescription: "Reload ueli",

    generalErrorTitle: "An error occured",
    generalErrorDescription: "Check log for more details",

    successfullyRefreshedIndexes: "Successfully refreshed indexes",
    successfullyClearedCaches: "Successfully cleared caches",
    successfullyUpdatedconfig: "Successfully updated config",
    successfullyClearedCachesBeforeExit: "Successfully cleared caches before exit",

    // settings
    generalSettingsMenuSection: "General",
    pluginSettingsMenuSection: "Plugins",

    generalSettings: "General",
    generalSettingsLanguage: "Language",
    generalSettingsAutostartApp: "Autostart app on system startup",
    generalSettingsShowTrayIcon: "Show tray icon",
    generalSettingsClearCachesOnExit: "Clear caches on quit",
    generalSettingsHotKey: "Hot Key",
    generalSettingsRescanIntervalEnabled: "Periodic rescan enabled",
    generalSettingsRescanInterval: "Rescan interval (in seconds)",
    generalSettingsShowAlwaysOnPrimaryDisplay: "Always show on primary display",
    generalSettingsExportSettings: "Export current settings",
    generalSettingsSuccessfullyExportedSettings: "Successfully exported settings",
    generalSettingsImportSettings: "Import settings",
    generalSettingsImportFileFilterJsonFiles: "JSON files",
    generalSettingsImportErrorInvalidConfig: "Settings import failed: file content seems to be invalid",
    generalSettingsResetAllSettings: "Reset all settings to default",

    appearanceSettings: "Appearance",
    appearanceSettingsWindowWidth: "Window width (in pixels)",
    appearanceSettingsMaxSearchResultsPerPage: "Max search results per page",
    appearanceSettingsSearchResultHeight: "Search result height (in pixels)",
    appearanceSettingsSmoothScrolling: "Smooth scrolling",
    appearanceSettingsUserInputHeight: "User input height (in pixels)",
    appearanceSettingsShowDescriptionOnAllSearchResults: "Show description on all search results",

    colorThemeSettings: "Color Theme",
    colorthemeUserInputBackgroundColor: "User input background color",
    colorThemeUserInputTextColor: "User input text color",
    colorThemeSearchResultsBackgroundColor: "Search results background color",
    colorThemeSearchResultsItemActiveBackgroundColor: "Search results active background color",
    colorThemeSearchResultsItemActiveTextColor: "Search results active text color",
    colorThemeSearchResutlsItemNameTextColor: "Search results name text color",
    colorThemeSearchResultsItemDescriptionTextColor: "Search results description text color",
    colorThemeScrollbarForegroundColor: "Scrollbar foreground color",
    colorThemeScrollbarBackgroundColor: "Scrollbar background color",

    colorPicker: "Color picker",

    applicationSearchSettings: "Application Search",
    applicationSearchSettingsDescription: `This plugin is searching for applications on your computer. You can specify the folders where your applications are installed and which file extension should be used to recognize an application.`,
    applicationSearchSettingsApplicationFolders: "Application folders",
    applicationSearchSettingsApplicationFolder: "Application folder",
    applicationSearchSettingsFolderPath: "Folder path",
    applicationSearchSettingsRemoveAction: "Remove",
    applicationSearchSettingsAddApplicationFolder: "Add application folder",
    applicationSearchSettingsApplicationFileExtensions: "Application file extensions",
    applicationSearchSettingsApplicationFileExtension: "File extension",
    applicationSearchSettingsAddApplicationFileExtension: "Add file extension",
    applicationSearchSettingsInvalidFileExtensionErrorMessage: `"{{value}}" is not a valid file extension`,
    applicationSearchSettingsNotAFolderErrorMessage: `"{{value}} is not a folder"`,
    applicationSearchSettingsDoesNotExistErrorMessage: `"{{value}} does not exist"`,
    applicationSearchSettingsFolderValidationError: `An error occured while trying to validate "{{value}}"`,

    searchEngineSettings: "Search engine",
    searchEngineSettingsDescription: `The search engine is used for preindexed items like applications, shortcuts and operating system settings/commands.`,
    searchEngineSettingsFuzzyness: "Fuzzyness",
    searchEngineSettingsFuzzynessDescription: "0 = strict, 1 = fuzzy",
    searchEngineSettingsStrict: "Strict",
    searchEngineSettingsFuzzy: "Fuzzy",
    searchEngineSettingsMaxSearchResults: "Max search results",

    shortcutSettings: "Shorcuts",
    shortcutSettingsDescription: `This plugin enables you to quickly open files or websites by setting up your own shortcuts.`,
    shortcutSettingsShortcut: "Shortcuts",
    shortcutSettingsTableType: "Type",
    shortcutSettingsTableName: "Name",
    shortcutSettingsTableExecutionArgument: "Execution argument",
    shortcutSettingsTableDescription: "Description",
    shortcutSettingsTableTags: "Tags",
    shortcutSettingsTableIcon: "Icon",
    shortcutSettingsTableEdit: "Edit",
    shortcutSettingsTableDelete: "Delete",
    shortcutSettingsAddShortcut: "Add shortcut",
    shortcutSettingsEditModalImageUrl: "Image URL",
    shortcutSettingsEditModalSvgString: "SVG string",
    shortcutSettingsEditModalGoogleWebsite: "Google website",
    shortcutSettingsEditModalDownloadsFolder: "Downloads folder",
    shortcutSettingsEditModalFilePath: "File path",
    shortcutSettingsInvalidShortcutErrorMessage: "Invalid shortcut",
    shortcutSettingsTagPlaceholder: "Add a tag and press enter",
    shortcutSettingsTypeUrl: "URL",
    shortcutSettingsTypeFilePath: "File path",

    translationSettingsTranslation: "Translation",
    translationSettingsDescription: `This plugin enables you to quickly translate words or short sentences. It uses an unofficial API (https://github.com/imankulov/linguee-api) for Linguee (https://linguee.de) and may be unstable.`,
    translationSettingsDebounceDelay: "Debounce delay (in milliseconds)",
    translationSettingsMinSearchTermLength: "Min search term length",
    translationSettingsPrefix: "Prefix",
    translationSettingsSourceLanguage: "Source language",
    translationSettingsTargetLanguage: "Target language",

    everythingSearch: "Everything search",
    everythingSearchSettingDescription: `This plugin enables you to use Everything search to find files and folders on your local file system. You have to install "Everything" and the "Everything Command-line Interface" from https://www.voidtools.com/downloads/. After installing both you have to specify the file path to 'es.exe' below.`,
    everythingSearchPathToBinary: `Path to "es.exe"`,
    everythingSearchPrefix: "Prefix",
    everythingSearchMaxSearchResults: "Max search results",
    everythingSearchPathToBinaryFilterName: "Executable files",

    mdfindSearch: "mdfind search",
    mdfindSettingsDescription: "This plugin enables you to use the native macOS search to find files and folders on your local file system.",
    mdfindSearchDebounceDelay: "Debounce delay (in milliseconds)",
    mdfindSearchPrefix: "Prefix",
    mdfindSearchMaxSearchResults: "Max search results",

    websearch: "Web search",
    websearchSettingDescription: `This plugin enables you to quickly search the internet with your favorite web search engine by setting up your own web search engines.`,
    websearchEngines: "Web search engines",
    websearchEditingModalTitleAdd: "Add web search engine",
    websearchEditingModalTitleEdit: "Edit web search engine",
    websearchName: "Name",
    websearchPrefix: "Prefix",
    websearchUrl: "URL",
    websearchIcon: "Icon",
    websearchPriority: "Priority",
    websearchIsFallback: "Fallback",
    websearchEncodeSearchTerm: "Encode search term",
    websearchInvalidWebsearchEngine: "Invalid web search engine",
    websearchDescription: `Search on {{websearch_engine}} for "{{search_term}}"`,

    fileBrowser: "File Browser",
    fileBrowserSettingsDescription: `This plugin enables you to browse through your local file system. To start you have to enter a valid absolute filepath.`,
    fileBrowserSettingsMaxSearchResults: "Max search results",
    fileBrowserOptionsShowHiddenFiles: "Show hidden files",
    fileBrowserOptionsBlackList: "Blacklist",
    fileBrowserOptionsBlackListPlaceholder: "File or folder name",

    operatingSystemCommands: "Operating system commands",
    operatingSystemCommandsSettingsDescription: `Operating system commands are simple commands to control your operating system e.g. to shutdown or restart your computer.`,

    macOsShutdown: "Shut Down",
    macOsShutdownDescription: "Shut down computer",
    macOsRestart: "Restart",
    macOsRestartDescription: "Restart computer",
    macOsLogout: "Log out",
    macOsLogoutDescription: "Log out current user",
    macOsLock: "Lock",
    macOsLockDescription: "Lock computer",

    windowsShutdown: "Shut down",
    windowsShutdownDescription: "Shut down computer",
    windowsRestart: "Restart",
    windowsRestartDescription: "Restart computer",
    windowsSignout: "Sign out",
    windowsSignoutDescription: "Sign out current user",
    windowsLock: "Lock",
    windowsLockDescription: "Lock computer",

    cancel: "Cancel",
    save: "Save",
    add: "Add",
    remove: "Remove",
    edit: "Edit",
    forExample: "For example",
    iconType: "Icon type",
};
