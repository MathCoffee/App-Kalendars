import SwiftUI
import WidgetKit

// Estructura de datos para la complicación del Apple Watch
struct KalendarsEntry: TimelineEntry {
    let date: Date
    let numeral: Int
    let signName: String
    let glyphName: String
    let correlation: String // "Caso" o "Meza"
}

struct KalendarsComplicationView: View {
    var entry: KalendarsEntry

    @Environment(\.widgetFamily) var family

    var body: some View {
        switch family {
        case .accessoryCircular:
            ZStack {
                AccessoryWidgetBackground()
                VStack(spacing: -2) {
                    Text("\(entry.numeral)")
                        .font(.system(size: 18, weight: .bold, design: .rounded))
                        .foregroundColor(.yellow)
                    Text(entry.signName.prefix(3).uppercase())
                        .font(.system(size: 8, weight: .semibold))
                        .foregroundColor(.white)
                }
            }
        case .accessoryRectangular:
            HStack(spacing: 8) {
                ZStack {
                    Circle()
                        .fill(Color.yellow.opacity(0.2))
                    Text("\(entry.numeral)")
                        .font(.system(size: 16, weight: .heavy))
                        .foregroundColor(.yellow)
                }
                .frame(width: 28, height: 28)

                VStack(alignment: .leading, spacing: 2) {
                    Text("\(entry.numeral) - \(entry.signName)")
                        .font(.headline)
                        .foregroundColor(.white)
                    Text("Cuenta \(entry.correlation)")
                        .font(.caption2)
                        .foregroundColor(.gray)
                }
            }
        default:
            VStack {
                Text("\(entry.numeral) - \(entry.signName)")
                    .font(.caption)
            }
        }
    }
}

@main
struct KalendarsWidgetBundle: WidgetBundle {
    var body: some Widget {
        KalendarsComplicationWidget()
    }
}

struct KalendarsComplicationWidget: Widget {
    let kind: String = "KalendarsComplication"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: KalendarsProvider()) { entry in
            KalendarsComplicationView(entry: entry)
        }
        .configurationDisplayName("Kalendars")
        .description("Muestra el numeral y signo calendárico prehispánico del día.")
        .supportedFamilies([.accessoryCircular, .accessoryRectangular, .accessoryInline])
    }
}

struct KalendarsProvider: TimelineProvider {
    func placeholder(in context: Context) -> KalendarsEntry {
        KalendarsEntry(date: Date(), numeral: 1, signName: "Cipactli", glyphName: "cipactli", correlation: "Meza")
    }

    func getSnapshot(in context: Context, completion: @escaping (KalendarsEntry) -> Void) {
        completion(placeholder(in: context))
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<KalendarsEntry>) -> Void) {
        let entry = KalendarsEntry(date: Date(), numeral: 1, signName: "Cipactli", glyphName: "cipactli", correlation: "Meza")
        let timeline = Timeline(entries: [entry], policy: .atEnd)
        completion(timeline)
    }
}
