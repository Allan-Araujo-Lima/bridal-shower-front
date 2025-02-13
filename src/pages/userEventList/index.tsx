import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { GetEventsByUser } from "@/requests/events";
import { Button } from "@headlessui/react";
import { useState, useEffect } from "react";

const colors = {
  background: "#f8fafc",
  cardBackground: "#ffffff",
  primary: "#2563eb",
  primaryHover: "#1d4ed8",
  textDark: "#1e293b",
  textLight: "#64748b",
};

type IEvent = {
  id: string;
  noivo_a1: string;
  noivo_a2: string;
  event_name: string;
  event_type: string;
  event_date: string;
  confirm_presence_until: string;
  invites: number;
  address: string;
  created_at: Date;
  updated_at: Date;
  user: {
    id: string;
  }
}

export const UserEventsList = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await GetEventsByUser();
        setEvents(response);
      } catch (error) {
        console.log("Erro ao buscar eventos", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto p-6" style={{ backgroundColor: colors.background }}>
      <h1 className="text-5xl font-bold mb-6 text-center" style={{ color: colors.textDark }}>
        Meus Eventos
      </h1>
      <div className="flex justify-end mb-4">
        <Button className="px-5 py-2 rounded-md shadow-md transition-transform transform hover:scale-105 text-white" style={{ backgroundColor: colors.primary }}>
          Cadastrar Novo Evento
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-40 w-full rounded-lg" />
          ))
          : events.length > 0
            ? events.map((event) => (
              <Card key={event.id} className="shadow-lg rounded-lg transition-shadow hover:shadow-xl" style={{ backgroundColor: colors.cardBackground }}>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold" style={{ color: colors.textDark }}>
                    {event.event_name}
                  </h2>
                  <p className="text-sm mt-1" style={{ color: colors.textLight }}>
                    {new Date(event.event_date).toLocaleDateString()}
                  </p>
                  <p className="mt-2 font-medium text-gray-700">{event.event_type}</p>
                  <Button className="mt-4 px-4 py-2 rounded-md transition-transform transform hover:scale-105 text-white" style={{ backgroundColor: colors.primary }}>
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))
            : <p className="text-center text-gray-500 col-span-full">Nenhum evento encontrado.</p>}
      </div>
    </div>
  );
};
