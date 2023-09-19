/**
 * Precompiled [gallery.java-application-conventions.gradle.kts][Gallery_java_application_conventions_gradle] script plugin.
 *
 * @see Gallery_java_application_conventions_gradle
 */
public
class Gallery_javaApplicationConventionsPlugin : org.gradle.api.Plugin<org.gradle.api.Project> {
    override fun apply(target: org.gradle.api.Project) {
        try {
            Class
                .forName("Gallery_java_application_conventions_gradle")
                .getDeclaredConstructor(org.gradle.api.Project::class.java, org.gradle.api.Project::class.java)
                .newInstance(target, target)
        } catch (e: java.lang.reflect.InvocationTargetException) {
            throw e.targetException
        }
    }
}
